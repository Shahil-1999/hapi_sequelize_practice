const { DataTypes } = require('sequelize');
const Book = require('./app.book')
const sequelize = require('../config/sequelize')


const Author = sequelize.define('authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Relationship
Author.hasMany(Book, {
    foreignKey: 'authorId',
});

module.exports = Author
