import { getData } from "./app.js";


async function setup() {
    const theObject = await getData();
    const myImage = new Image(400, 400);
    myImage.src = theObject.img;
    myImage.alt = theObject.alt;
    const root = document.getElementById("main");
    root.append(myImage);
    console.log(theObject);
}
setup()
