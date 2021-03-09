# Beelder Opdracht 1 (Javascript)

## Omschrijving

Herschrijf de volgende functie zonder gebruik te maken
van loops (for, while, forEach et cetera).

```
const parseFilterUrl = (url) => {
    const parts = url.split('|');
    const filters = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const split = part.split(':');
        const obj = {};
        obj[split[0]] = split[1].split(',');
        filters.push(obj);
    }
    return filters;
}
const filters =
parseFilterUrl('regions:the-north|people:hodor,the-hound|omg:true');
window.console.log({filters});
```

## Oplossing

De oplossing in deze leek voor de handliggend namelijk een recursive functie. Mijn oplossing vind je zowel in opdracht1.js als hieronder:

```
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
```


