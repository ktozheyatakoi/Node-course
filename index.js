const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname= 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

const promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running as http://${hostname}:${port}`);
});