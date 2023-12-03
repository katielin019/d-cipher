$(document).ready(() => {
    var puzzle = "";
    var key = {};

    // Load default puzzle
    $.getJSON("sample.json", function(data) {
        puzzle = data.puzzle_string;
        key = data.puzzle_key[0];
        $("#cipher-display").text(puzzle);
    }).fail(function() {
        alert("Error occured while loading the sample puzzle. Try refreshing the page.");
    });

    // Get puzzle input
    $("#read-puzzle").click( () => {
        puzzle = $("#puzzle-input").val().toUpperCase();
        $("#cipher-display").text(puzzle);
    });
});