const { DataTypes } = require('sequelize');
const Profile = require('./app.profile')
const sequelize = require('../config/sequelize')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Relationship
User.hasOne(Profile, {
    foreignKey: 'userId',
});


module.exports = User