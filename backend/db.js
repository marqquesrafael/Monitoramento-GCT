require("dotenv").config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('GCT', process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    dialect: 'mysql',
    host: process.env.HOST_DATABASE,
    port: process.env.PORT_DATABASE
});

module.exports = sequelize;