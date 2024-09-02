const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize')
const Course = require('./app.course')
const Enrollment = require('./app.enrollment')

const Student = sequelize.define('students', {
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
Student.belongsToMany(Course, {
    through: Enrollment,
    foreignKey: 'studentId',
});

module.exports = Student
