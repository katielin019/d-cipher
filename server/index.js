const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
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
	console.log('Listening on port ', port);
});