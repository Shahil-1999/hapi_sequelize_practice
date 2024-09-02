const { DataTypes } = require('sequelize');
const Author = require('./app.author')
const sequelize = require('../config/sequelize')


const Book = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Relationship
Book.belongsTo(Author, {
    foreignKey: 'authorId',
});

module.exports = Book
