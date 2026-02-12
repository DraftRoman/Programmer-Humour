import { getData } from "./app.js";


async function setup() {
    const theObject = await getData();
    const root = document.getElementById("main");
    const title = document.createElement("h1");
    const suptitle = document.createElement("h3");
    title.textContent = theObject.title
    suptitle.textContent = " day " + theObject.day;
    const myImage = new Image(400, 400);
    myImage.src = theObject.img;
    myImage.alt = theObject.alt;
    root.append(myImage, title, suptitle);
    console.log(theObject);
}
setup()
