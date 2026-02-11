import { getData } from "./app.js";


async function setup() {
    const theObject = await getData();
    console.log(theObject);
}
setup()
