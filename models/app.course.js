const { DataTypes } = require('sequelize');
const Student = require('./app.student')
const Enrollment = require('./app.enrollment')
const sequelize = require('../config/sequelize')


const Course = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Relationship
Course.belongsToMany(Student, {
    through: Enrollment,
    foreignKey: 'courseId',
});

module.exports = Course