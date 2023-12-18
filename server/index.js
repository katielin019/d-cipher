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

// // MUST BE LOWERCASE
// // URL: localhost:3002/letterFreq/a
// app.get('/letterFreq/:letter', (req, res) => {
// 	const char = req.params.letter;
// 	let pos = charFreqs.findIndex(((obj) => obj.unigram === char));

// 	let count = charFreqs[pos].freq;
// 	let frequency = (count / charSum) * 100;
// 	frequency = frequency.toFixed(3);

// 	res.send(`Letter: ${char} is rank ${pos} of 26 with a frequency of ${frequency}%.`);
// });

app.get('/puzzle/:id', (req, res) => {
	const id = req.params.id;
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
	console.log('Listening on port ', port);
});