import { App } from './app.js';

import { selectedAlgorithmChoice, newArray, toggleSorting, onResize } from './controls.js'

let a = new App();

selectedAlgorithmChoice(a);
newArray(a);
toggleSorting(a);
onResize(a);
