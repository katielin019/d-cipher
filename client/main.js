const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97));
let puzzle;

// load default puzzle (sample json)

async function loadJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
}

document.addEventListener("DOMContentLoaded", function() {
    loadJSON("sample.json").then(data => {
        puzzle = data.puzzle_string;
        renderPuzzle(puzzle);
    }).catch(err => console.error(err));
});

// get puzzle input

// render puzzle via puzzle string

// initialize letterbox events

// update view

// reset view
function resetView() {
    const classes = ["input-row-1", "label-row-1", "input-row-2", "label-row-2", "freq-table"];
    classes.forEach(c => {
        let e = document.querySelector(`.${c}`);
        e.innerHTML = '';
    });
}

// get label html ??
function getLabelHTML(letter) {

}

// get letterbox html
function getLetterboxHTML(letter, optional_attr='') {

}

// activate solver
function activateSolver(puzzle_string) {

}

// calculate frequencies
function calculateFrequencies(puzzle_string) {

}