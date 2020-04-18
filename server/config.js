require('dotenv').config();

module.exports = {
  port: 8080,
  host: process.env.HOST || 'localhost',
};
