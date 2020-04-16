import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3001, () => {
  console.info(`Running on ${3001}`);
});