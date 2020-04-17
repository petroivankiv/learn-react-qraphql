import mongoose from 'mongoose';

export function setUpDb() {
  mongoose.connect(process.env.DB_HOST);
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Conected correctly to db server');
  });
}
