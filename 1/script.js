"use strict"

let masyvas = [];

function addValue() {
    masyvas.push(document.getElementById("input").value);
    // masyvas[masyvas.length] = document.getElementById("input").value;
}

function removeValue() {
    masyvas.pop();
}

function showResult() {
    console.log(masyvas);
}

document.getElementById('check').addEventListener('click', () => {
    addValue();
});

document.getElementById('remove').addEventListener('click', () => {
    removeValue();
});

document.getElementById('show').addEventListener('click', () => {
    showValue();
});

// document.getElementById('check').addEventListener('click', () => console.log([document.getElementById("input").value]));
