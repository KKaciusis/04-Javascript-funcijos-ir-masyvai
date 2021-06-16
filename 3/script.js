"use strict"

let counter = 1;

function createDivs() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute('elementas', counter++);
    document.getElementById("container").appendChild(newDiv);
}
document.getElementById('addDiv').addEventListener('click', () => {
    createDivs();
});