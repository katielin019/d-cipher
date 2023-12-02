$(document).ready(() => {
    alert("hi");
    var puzzle = "";
    var key = {};

    let currentColor = 'white'; // have to define as a semi-global var
    $('#btnDemo').click( () => {
        if (currentColor === 'white') {
            currentColor = 'blue';
        } else {
            currentColor = 'white';
        }

        $('#header').css('background-color', currentColor);
        $('#header').text('Class Demo - ' + currentColor);
    });

    // $.getJSON("sample.json", function(data) {
    //     puzzle = data.puzzle_string;
    //     key = data.puzzle_key[0];
    //     alert("puzzle loaded: " + puzzle)
    // }).fail(function() {
    //     alert("Error occured while loading the sample puzzle. Try refreshing the page.")
    // })

    // $("#solver-container").append(puzzle);
});