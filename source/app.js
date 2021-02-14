import { Draw } from './draw.js';

import { bubbleSort } from './algorithms/bubblesort.js'
import { insertionSort } from './algorithms/insertionsort.js'
import { quickSort } from './algorithms/quicksort.js'
import { mergeSort } from './algorithms/mergesort.js'
import { heapSort } from './algorithms/heapsort.js'
import { cocktailShakerSort } from './algorithms/cocktailshakersort.js'

import { shuffle } from './shuffle.js'

const DEFAULT_ARR_LENGTH = 128,
      DRAWER_HEIGHT_FRACTION = 0.7,
      DRAWER_WIDTH_FRACTION = 0.6;

let navBar = $('#mainNavbar');

// TODO: make elements of different states have different colours.
/* Handles all running and drawing. */
export class App
{
    constructor()
    {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - navBar.outerHeight(true);
        this.drawer = new Draw(this.canvas, this.context, DRAWER_HEIGHT_FRACTION, DRAWER_WIDTH_FRACTION);
        this.initArray(DEFAULT_ARR_LENGTH);
    }

    adjustCanvasDimensions()
    {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - navBar.outerHeight(true);
        this.drawer = new Draw(this.canvas, this.context, DRAWER_HEIGHT_FRACTION, DRAWER_WIDTH_FRACTION);
        this.drawer.draw(this.arr);
    }

    /* Initialises an array of the specified length. */
    initArray(length)
    {
        this.arrLength = length;
        this.newArray();
    }

    newArray()
    {
        this.running = false;
        this.arr = new Array(this.arrLength);

        for (let i = 0; i < this.arrLength; i++)
            this.arr[i] = i + 1;

        shuffle(this.arr);

        this.currentIndex = 0;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawer.draw(this.arr);

        this.assignStates();
    }

    choseSort(currentSortAlgorithm)
    {
        this.currentSortAlgorithm = currentSortAlgorithm;
        this.running = false;
        this.assignStates();
    }

    assignStates()
    {
        this.states = [];
        switch (this.currentSortAlgorithm)
        {
            case 'Bubble sort':
                bubbleSort(this.arr, this.states);
                break;
            case 'Insertion sort':
                insertionSort(this.arr, this.states);
                break;
            case 'Mergesort':
                mergeSort(this.arr, this.states);
                break;
            case 'Quicksort':
                quickSort(this.arr, this.states);
                break;
            case 'Heapsort':
                heapSort(this.arr, this.states);
                break;
            case 'Cocktail shaker':
                cocktailShakerSort(this.arr, this.states);
                break;
        }
        this.currentIndex = 0;
    }

    animate()
    {
        if (this.running && this.currentIndex < this.states.length)
        {
            this.arr = this.states[this.currentIndex];
            ++this.currentIndex;

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawer.draw(this.arr);

            window.requestAnimationFrame(() => { this.animate() });
        }
    }

    toggleSorting()
    {
        this.running = !this.running;
        this.animate();
    }
}
