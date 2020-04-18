import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import config from './config';
import { setUpDb } from './database';

import loginRouter from './auth/router';
import graphQlRouter from './qraphql/router';

const app = express();

setUpDb();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api/auth', loginRouter);
app.use('/api/graphql', graphQlRouter);

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../build/index.html')));
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
