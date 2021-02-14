import { Draw } from './draw.js';

let canvas, context;

function setup()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setup();

let drawer = new Draw(canvas, context);

let arr = [];
for (let i = 1; i <= 100; i++)
    arr.push(i);

drawer.draw(arr);