const fs = require("fs");
const puppeteer = require("puppeteer-core");
const { readdir } = require("fs/promises");

const OUTPUT_PATH = "./public/ogimages"; // where the created screenshots will go
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; // Chrome on your local machine
const POSTS_PATH = "./src/pages/blog"; // where your blog posts are
const POSTS_FILE_EXTENSION = ".mdx"; // file type used for posts
const OPEN_GRAPH_ROOT_URL = "http://localhost:3000/opengraph"; // where are we rendering the OGImages?

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
const getBlogPostFileNames = async () => {
    const filenames = await readdir(POSTS_PATH);

    return filenames.filter((filename) => filename.endsWith(POSTS_FILE_EXTENSION));
};

// Converts filenames into URLs for the screenshot
const getOpenGraphUrls = (filesNames) =>
    filesNames.map(
        (fileName) => `${OPEN_GRAPH_ROOT_URL}/${fileName.replace(POSTS_FILE_EXTENSION, "")}`
    );

// Main function
(async () => {
    prepareOutputDirectory();
    const urls = getOpenGraphUrls(await getBlogPostFileNames());

    urls.forEach(async (url) => {
        await takeScreenshot(url);
    });

    // eslint-disable-next-line no-console
    console.log(`📸 Successfully created ${urls.length} screenshots`);
})();
