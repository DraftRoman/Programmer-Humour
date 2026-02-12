import { getData } from "./app.js";

const API_URL = `https://xkcd.now.sh/?comic=latest`;
const finalPoint = "https://xkcd.vercel.app/?comic=303";
setup(API_URL);
async function setup(API) {
    const theObject = await getData(API);
    const root = document.getElementById("main");
    photoCard(theObject,root)()
    }

function photoCard(object, root) {
    const title = document.createElement("h1");
    const supTitle = document.createElement("h3");
    title.textContent = object.title
    supTitle.textContent = " day " + object.day;
    const myImage = new Image(400, 400);
    myImage.src = object.img;
    myImage.alt = object.alt;
    root.append(title, supTitle, myImage);
    console.log(object);
}
setup(finalPoint)
