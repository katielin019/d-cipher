'use strict';

const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000'
}));

var charFreqs = [];
var charSum;
var bigrams = [];
var bigramSum;
var trigrams = [];
var trigramSum;

// MUST BE LOWERCASE
// URL: localhost:3002/letterFreq/a
app.get('/letterFreq/:letter', (req, res) => {
	const char = req.params.letter;
	let pos = charFreqs.findIndex(((obj) => obj.unigram === char));

	let count = charFreqs[pos].freq;
	let frequency = (count / charSum) * 100;
	frequency = frequency.toFixed(3);

	res.send(`Letter: ${char} is rank ${pos} of 26 with a frequency of ${frequency}%.`);
});

app.post('/', (req, res) => {
	res.send('POST: Hello world!');
});

app.put('/', (req, res) => {
	res.send('PUT: Hello world!');
});

app.delete('/', (req, res) => {
	res.send('DELETE: Hello world!');
});

app.listen(port, () => {
	let rawData;
	rawData = fs.readFileSync('./data/english_1grams.json');
	charFreqs = JSON.parse(rawData);
	charSum = charFreqs.reduce(function(sum, charObj) {
		return sum + charObj.freq;
	}, 0);
	// console.log('charFreqs populated; count = ', charFreqs.length);
	// console.log('charSum = ', charSum);

	rawData = fs.readFileSync('./data/english_2grams.json');
	bigrams = JSON.parse(rawData);
	// console.log('bigrams populated; count = ', bigrams.length);

	rawData = fs.readFileSync('./data/english_3grams.json');
	trigrams = JSON.parse(rawData);
	// console.log('trigrams populated; count = ', trigrams.length);


	console.log('Listening on port ', port);
});