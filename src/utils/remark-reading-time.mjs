import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

const remarkReadingTime =
    () =>
    (tree, { data }) => {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        // eslint-disable-next-line no-param-reassign
        data.astro.frontmatter.timeToRead = readingTime.text;
    };

export default remarkReadingTime;
