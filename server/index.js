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
var bigrams = [];
var trigrams = [];

// URL: /letterFreq?letter=A
app.get('/letterFreq', (req, res) => {
	const letter = req.query.letter;
	const freq = 
	res.send('GET: Hello world!');
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
	console.log('charFreqs populated; count = ', charFreqs.length);

	rawData = fs.readFileSync('./data/english_2grams.json');
	bigrams = JSON.parse(rawData);
	console.log('bigrams populated; count = ', bigrams.length);

	rawData = fs.readFileSync('./data/english_3grams.json');
	trigrams = JSON.parse(rawData);
	console.log('trigrams populated; count = ', trigrams.length);


	console.log('Listening on port ', port);
});