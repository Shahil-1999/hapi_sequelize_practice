require('dotenv').config();


module.exports = {
    development: {
        username: process.env.username,
        password: process.env.password,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
};
