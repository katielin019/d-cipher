$(document).ready(() => {
    var puzzle;
    var ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // Load default puzzle
    $.getJSON("sample.json", function(data) {
        puzzle = data.puzzle_string;
        // var key = data.puzzle_key[0];
        renderPuzzle(puzzle);
    }).fail(function() {
        alert("Error occured while loading the sample puzzle. Try refreshing the page.");
    });

    // Get puzzle input
    $("#read-puzzle").click( () => {
        puzzle_string = $("#puzzle-input").val().toUpperCase();
    });

    function renderPuzzle(puzzle_string) {
        $("#cipher-display").text(puzzle_string);
        $("#decoder-display").text(puzzle_string);
        let uniques = activateSolver(puzzle_string);
        $("#solver").text(uniques);
        freqs = calculateFrequencies(puzzle_string);
        $("#frequencies").text(JSON.stringify(freqs));
        $("#tips").text("The most frequent letters in the English language are ETAOIN");

        // var words = puzzle_string.split();
        
        // words.forEach(function(word) {
        //     for (var i = 0; i < word.length; i++) {
        //         var currLetter = word.charAt(i);
        //     }
        // })
    }

    function activateSolver(puzzle_string) {
        var j, char, unique;
        unique = [];

        for (j = 0; j < puzzle_string.length; j++) {
            char = puzzle_string.charAt(j)
            if (ALPHA.includes(char) && !unique.includes(char)) {
                unique.push(char);
            }
        }
        return unique.toString();
    }

    // adapted from https://github.com/fidian/rumkin-cipher
    function calculateFrequencies(puzzle_string) {
        var c, i, result;
        result = {};

        for (i = 0; i < puzzle_string.length; i++) {
            c = puzzle_string.charAt(i);
            if (ALPHA.includes(c)) {
                if (result[c]) {
                    result[c] += 1;
                } else {
                    result[c] = 1;
                }
            }
        }
        return result;
    }
});