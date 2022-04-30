const Sequelize = require('sequelize');
const database = require('./db');

const Monitoramento = database.define('monitoramento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    placa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_termino: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

database.sync();

module.exports = Monitoramento;