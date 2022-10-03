/* eslint-disable no-console */
const fetch = require("node-fetch");
const fs = require("fs");

const getScreenshot = async () => {
    // Where we'll store images
    const dir = "./public/ogimages";

    // Make sure the directory exists, if not create it
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Create the screenshot using 11ty's screenshot service
    const response = await fetch(
        `https://v1.screenshot.11ty.dev/${encodeURIComponent(
            "https://merlinmason.co.uk"
        )}/opengraph`
    );

    // Convert the response to a buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write the buffer to a file
    fs.writeFile(`${dir}/image.png`, buffer, (err) => {
        if (err) {
            console.log("error", err);
            return process.exit(1);
        }
        return true;
    });
};

getScreenshot();
