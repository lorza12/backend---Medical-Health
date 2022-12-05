import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hola');
});

app.listen(8080, () => {
    console.log('server is running on port 8080');
});