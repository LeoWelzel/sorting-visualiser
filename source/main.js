import { bubbleSort } from './algorithms/bubblesort.js'
import { insertionSort } from './algorithms/insertionsort.js'

import { Draw } from './draw.js';

let canvas, context;

function setup()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function shuffle(array)
{
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        --currentIndex;
    
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

setup();

let drawer = new Draw(canvas, context);

let arr = [];
for (let i = 1; i <= 20; i++)
    arr.push(i);

shuffle(arr);

let states = [];
insertionSort(arr, states);
let currentIndex = 0;

function animate()
{
    if (currentIndex < states.length)
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawer.draw(states[currentIndex]);
        currentIndex++;

        window.requestAnimationFrame(animate);
    }
}

animate();