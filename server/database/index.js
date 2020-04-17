import mongoose from 'mongoose';

export function setUpDb() {
  mongoose.connect('mongodb://reactAppUser:reactAppUser1@ds211648.mlab.com:11648/react-app');
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Conected correctly to db server');
  });
}
