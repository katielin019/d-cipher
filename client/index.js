$(document).ready(() => {
    var puzzle;
    var ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // Load default puzzle
    const json = loadJSON("sample.json");
    console.log(json);
    puzzle = json.puzzle_string;
    console.log(puzzle);
    renderPuzzle(puzzle);
    // $.getJSON("sample.json", function(data) {
    //     puzzle = data.puzzle_string;
    //     renderPuzzle(puzzle);
    // }).fail(function() {
    //     alert("Error occured while loading the sample puzzle. Try refreshing the page.");
    // });

    // Get puzzle input
    $("#read-puzzle").click( () => {
        puzzle_string = $("#puzzle-input").val().toUpperCase();
        renderPuzzle(puzzle_string);
    });

    async function loadJSON(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        return await response.json();
    }
    

    function renderPuzzle(puzzle_string) {
        $("#cipher-display").text(puzzle_string);
        $("#decoder-display").text(puzzle_string);

        resetView();

        var letterSet = activateSolver(puzzle_string);
        var letterArr = Array.from(letterSet);
        var box, label, c;

        for (i = 0; i < letterArr.length; i++) {
            c = letterArr[i];
            label = getLabelHTML(c);

            if (i == 0) {
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

        freqs = calculateFrequencies(puzzle_string);
        var row = "<tr><td>";
        Object.keys(freqs).forEach(key => {
            var tableContent = key + "</td><td>" + freqs[key] + "</td></tr>";
            $(".freq-table").append(row + tableContent);
        })

        initializeEvents(letterArr);
    }

    function initializeEvents(letters) {
        $('.letterbox').on('keyup', function() {
            var substitutions = {};
            for (i=0; i < letters.length; i++) {
                if ($(`#${letters[i]}`).val()) {
                    let c = letters[i]
                    substitutions[c] = $(`#${letters[i]}`).val();
                }
            }
            updateView(substitutions);
        })
    }

    function updateView(substitutions) {
        // alert(substitutions);
        let currStr = $("#decoder-display").html();
        var result = "";
        // alert(currentSolveState);
        for (i=0; i < currStr.length; i++) {
            let c = currStr.charAt(i);
            if (ALPHA.includes(c)) {
                if (substitutions[c]) {
                    result += substitutions[c];
                } else {
                    result += c;
                }
            } else {
                result += c;
            }
        }
        $("#decoder-display").text(result);
    }

    function resetView() {
        $('.input-row-1').empty();
        $('.input-row-2').empty();
        $('.label-row-1').empty();
        $('.label-row-2').empty();
        $(".freq-table").empty();
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
        letters = new Set();

        for (i = 0; i < puzzle_string.length; i++) {
            c = puzzle_string.charAt(i);
            if (ALPHA.includes(c)) {
                letters.add(c);
            }
        }
        return letters;
    }

    // // adapted from https://github.com/fidian/rumkin-cipher
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