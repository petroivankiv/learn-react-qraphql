import express from 'express';
import path from 'path';
import config from './config';

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});