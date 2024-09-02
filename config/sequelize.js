const { Sequelize } = require('sequelize');
require('dotenv').config(); 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.username,
  process.env.password,
  {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
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
