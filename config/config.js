require("dotenv").config(); // Load environment variables

module.exports = {
    development: {
        username: 'root',
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        dialect: process.env.DIALECT,
        host: process.env.HOST,
    },
};
