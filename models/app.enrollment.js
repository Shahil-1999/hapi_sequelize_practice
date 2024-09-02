const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize')
const Student = require('./app.student')
const Course = require('./app.course')

const Enrollment = sequelize.define('enrollments', {
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: 'id',
        },
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id',
        },
    },
});

module.exports = Enrollment
