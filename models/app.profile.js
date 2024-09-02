const { DataTypes } = require('sequelize');
const User = require('./app.user')
const sequelize = require('../config/sequelize')


const Profile = sequelize.define('profiles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
});

// Relationship
// Profile.belongsTo(User, {
//     foreignKey: 'userId',
// });

module.exports = Profile
