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

    // // Get puzzle input
    // $("#read-puzzle").click( () => {
    //     puzzle_string = $("#puzzle-input").val().toUpperCase();
    // });

    function renderPuzzle(puzzle_string) {
        $("#cipher-display").text(puzzle_string);
        $("#decoder-display").text(puzzle_string);
        var letterSet = activateSolver(puzzle_string);
        // $("#solver-txt").text(uniques);

        var letterArr = Array.from(letterSet);
        var box, label, c;

        for (i = 0; i < letterArr.length; i++) {
            c = letterArr[i];
            label = getLabelHTML(c);

            if (i == 0) {
                // <td><textarea class="letterbox" id="Q" cols="1" rows="1" maxlength="1" autofocus></textarea></td>
                box = getLetterboxHTML(c, 'autofocus');
                $('.input-row-1').append(box);
                $('.label-row-1').append(label);
            } else if (i < 13) {
                box = getLetterboxHTML(c);
                $('.input-row-1').append(box);
                $('.label-row-1').append(label);
            } else {
                box = getLetterboxHTML(c);
                $('.input-row-2').append(box);
                $('.label-row-2').append(label);
            }
        }

        // letterArr.forEach(function(letter) {
        //     let box = getLetterboxHTML(letter);
        //     $('.input-row-1').append(box);
        //     let label = getLabelHTML(letter);
        //     $('.label-row-1').append(label);
        // });

        // freqs = calculateFrequencies(puzzle_string);
        // $("#frequencies").text(JSON.stringify(freqs));
        // $("#tips").text("The most frequent letters in the English language are ETAOIN");
    }

    function getLabelHTML(letter) {
        // <td class="letter">Q</td>
        var htmlOpen = "<td class='letter'>";
        var htmlClose = "</td>";
        return htmlOpen + letter + htmlClose;
    }

    function getLetterboxHTML(letter, optional_attr='') {
        var htmlOpen = "<td><textarea class='letterbox' id='";
        var htmlClose = "' cols='1' rows='1' maxlength='1'" + optional_attr + "></textarea></td>";
        return htmlOpen + letter + htmlClose;
    }

    function activateSolver(puzzle_string) {
        var c, letters;
        // var c, letters, result;
        // result = "";
        letters = new Set();

        for (i = 0; i < puzzle_string.length; i++) {
            c = puzzle_string.charAt(i);
            if (ALPHA.includes(c)) {
                letters.add(c);
            }
        }
        // result = [...letters].join(' ');
        // return result;
        return letters;
    }

    // // adapted from https://github.com/fidian/rumkin-cipher
    // function calculateFrequencies(puzzle_string) {
    //     var c, i, result;
    //     result = {};

    //     for (i = 0; i < puzzle_string.length; i++) {
    //         c = puzzle_string.charAt(i);
    //         if (ALPHA.includes(c)) {
    //             if (result[c]) {
    //                 result[c] += 1;
    //             } else {
    //                 result[c] = 1;
    //             }
    //         }
    //     }
    //     return result;
    // }
});