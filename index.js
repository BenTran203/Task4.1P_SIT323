const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

// Welcome route at the root
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to the Calculator Service. Use the endpoints /add, /subtract, /multiply, /divide with query parameters 'num1' and 'num2' to perform calculations."
    });
});

// Endpoint for addition
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: 'Both numbers must be valid.' });
    } else {
        res.send({ result: num1 + num2 });
    }
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: 'Both numbers must be valid .' });
    } else {
        res.send({ result: num1 - num2 });
    }
});

// Endpoint for multiplication
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: 'Both numbers must be valid .' });
    } else {
        res.send({ result: num1 * num2 });
    }
});

// Endpoint for division
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: 'Both must be valid numbers.' });
    } else if (num2 === 0) {
        res.status(400).send({ error: 'Division by zero is not allowed.' });
    } else {
        res.send({ result: num1 / num2 });
    }
});

// Default error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({error: 'An unexpected error occurred.'});
});

// Server listening on port
app.listen(port, () => console.log(`Calculator service listening at http://localhost:${port}`));
