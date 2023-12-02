$(document).ready(() => {
    var puzzle = "";
    var key = {};

    $.getJSON("sample.json", function(data) {
        puzzle = data.puzzle_string;
        key = data.puzzle_key[0];
    }).fail(function() {
        alert("Error occured while loading JSON")
    })
});