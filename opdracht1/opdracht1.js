const url = 'regions:the-north|people:hodor,the-hound|omg:true';

const parts = url.split('|');
const filters = [];

const parseFilterUrlRescursive = (parts) => {
    const part = parts.shift();
    const split = part.split(':');
    const obj = {};
    obj[split[0]] = split[1].split(',');
    filters.push(obj);

    // Make it recursive
    if (parts.length) {
        parseFilterUrlRescursive(parts);
    }
}

parseFilterUrlRescursive(parts);

window.console.log({ filters });