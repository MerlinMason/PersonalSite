import fs from "fs";
import puppeteer from "puppeteer-core";
import { readdir } from "fs/promises";

const OUTPUT_PATH = "./public/ogimages"; // where the created screenshots will go
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; // Chrome on your local machine
const POSTS_PATH = "./src/content/blog"; // where your blog posts are
const POSTS_FILE_EXTENSION = ".mdx"; // file type used for posts
const OPEN_GRAPH_ROOT_URL = "http://localhost:4321/opengraph"; // where are we rendering the OGImages?

// Creates the output directory if it doesn't exist, ensures it's empty
const prepareOutputDirectory = () => {
    if (!fs.existsSync(OUTPUT_PATH)) {
        fs.mkdirSync(OUTPUT_PATH, { recursive: true });
    }

    fs.rm(OUTPUT_PATH, () => null);
};

// Creates a screenshot from a given URL
const takeScreenshot = async (url) => {
    const browser = await puppeteer.launch({
        product: "chrome",
        args: [],
        executablePath: CHROME_PATH,
        headless: true,
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(url);
    await page.screenshot({
        path: `${OUTPUT_PATH}/${url.replace(OPEN_GRAPH_ROOT_URL, "")}.png`,
    });
    await browser.close();
};

// Gets all .mdx files in the blog directory
const getBlogPostSlugs = async () => {
    const filenames = await readdir(POSTS_PATH);

    // Astro uses file name routing, so the slug is identical to the file name, minus the file extension
    return filenames
        .filter((filename) => filename.endsWith(POSTS_FILE_EXTENSION))
        .map((filename) => filename.replace(POSTS_FILE_EXTENSION, "").toLowerCase());
};

// Converts filenames into URLs for the screenshot
const getOpenGraphUrls = (slugs) => slugs.map((slug) => `${OPEN_GRAPH_ROOT_URL}/${slug}`);

// Main function
(async () => {
    prepareOutputDirectory();
    const blogPostSlugs = await getBlogPostSlugs();
    // get URLs for all blog posts and a generic one used for any other page on the site
    const urls = getOpenGraphUrls([...blogPostSlugs, "page"]);

    urls.forEach(async (url) => {
        await takeScreenshot(url);
    });

    // eslint-disable-next-line no-console
    console.log(`📸 Successfully created ${urls.length} screenshots`);
})();
