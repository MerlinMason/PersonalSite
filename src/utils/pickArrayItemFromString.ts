// Consistently pick an item from an array based on the content of a string
const pickArrayItemFromString = <TArrayItem>(string: string, arr: TArrayItem[]): TArrayItem => {
    const number = string.length
        ? string.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0)
        : 0;

    return arr[number % arr.length];
};

export default pickArrayItemFromString;
