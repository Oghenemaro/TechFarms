import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extented: true}));

const Route = require('./server/routes/routes');
app.use('/', Route);

app.get('*', (req, res) => res.status(200).send({FarmsConnect: 'Welcome to the beginning of nothingness'}));

const port = parseInt(process.env.port, 10) || 7000;
app.set('port, port');

const server = http.createServer(app);

server.listen(port, () => console.log(`Application running on port 7000.`));

module.exports = app;


