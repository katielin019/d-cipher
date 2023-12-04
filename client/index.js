$(document).ready( () => {
    $('#header').css('background-color', 'orange');
    setup();
});

// import Handlebars from "handlebars";

// function setup() {
//     var html = $('#cipher-template').innerHTML;
//     var template = Handlebars.compile(html);
//     var init, puzzle, key, compiled;
//     init = {};

//     $.getJSON("sample.json", function(data) {
//         puzzle = data.puzzle_string;
//         key = data.puzzle_key[0];
//         init = {puzzle_string: puzzle, puzzle_key: key};
//         compiled = template(init);
//         $('#cipher').innerHTML = compiled;
//     }).fail(function() {
//         alert("Error occured while loading the sample puzzle. Try refreshing the page.");
//     });
// }

// // $(document).ready(() => {
// //     var puzzle;
// //     var ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// //     // Load default puzzle
// //     $.getJSON("sample.json", function(data) {
// //         puzzle = data.puzzle_string;
// //         // var key = data.puzzle_key[0];
// //         renderPuzzle(puzzle);
// //     }).fail(function() {
// //         alert("Error occured while loading the sample puzzle. Try refreshing the page.");
// //     });

// //     // Get puzzle input
// //     $("#read-puzzle").click( () => {
// //         puzzle_string = $("#puzzle-input").val().toUpperCase();
// //         renderPuzzle(puzzle_string);
// //     });

// //     function renderPuzzle(puzzle_string) {
// //         var words = puzzle_string.split();
// //         for (var i = 0; i < words.length; i++) {
// //             var html = "<span class='word'>";
// //             html += words[i] + "</span>";
// //             $("#cipher-display").append(html);
// //         }
// //         // $("#cipher-display").text(puzzle_string);
// //         freqs = calculateFrequencies(puzzle_string);
// //         renderTable(freqs);
// //         // $("#results").text(JSON.stringify(freqs));
// //     }

// //     function renderTable(frequencies) {
// //         for (var key of Object.keys(frequencies)) {
// //             var html;
// //             html = "<tr>";
// //             html += "<td>" + key + "</td><td>" + frequencies[key] + "</td></tr>";
// //             $("#tbody").append(html);
// //         }
// //     }

 


// //     function sortByFrequency() {

// //     }

// //     function sortAlphabetically() {

// //     }

// //     // adapted from https://github.com/fidian/rumkin-cipher
// //     function calculateFrequencies(puzzle_string) {
// //         var c, i, result;
// //         result = {};

// //         for (i = 0; i < puzzle_string.length; i++) {
// //             c = puzzle_string.charAt(i);
// //             if (ALPHA.includes(c)) {
// //                 if (result[c]) {
// //                     result[c] += 1;
// //                 } else {
// //                     result[c] = 1;
// //                 }
// //             }
// //         }
// //         return result;
// //     }
// // });