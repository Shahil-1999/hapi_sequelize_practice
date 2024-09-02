const { Sequelize } = require('sequelize');
// require('dotenv').config(); 
const config = require('./config')
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    dialect: config.development.dialect,
    host: config.development.host,
    port: 3306,
    logging: false, 
  }
);
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync()

module.exports = sequelize; 
