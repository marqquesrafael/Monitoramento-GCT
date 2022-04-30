const express = require('express');
const app = express()
const database = require('../db')
require("dotenv").config();

app.use(express.json());
const Monitoramento = require('../monitoramento');

app.get('/', async (req, res) => {

    const monitoramentos = await Monitoramento.findAll();

    res.send(JSON.stringify(monitoramentos))
});

app.post('/create', async (req, res) => {

    const { placa, data_inicio, data_termino } = req.body;

    const monitoramento = await Monitoramento.create({
        placa: placa,
        data_inicio: data_inicio,
        data_termino: data_termino
    });

    res.send(JSON.stringify(monitoramento));
});


app.put('/update', async(req, res) => {

    const { id, placa, data_inicio, data_termino } = req.body;
    
    const monitoramento = await Monitoramento.findByPk(id);

    monitoramento.placa = placa;
    monitoramento.data_inicio = data_inicio;
    monitoramento.data_termino = data_termino;
    await monitoramento.save(monitoramento);

    res.send(JSON.stringify(monitoramento));
});

app.delete('/delete/:id', async(req, res) => {
   
    const monitoramento = await Monitoramento.findByPk(req.params.id);

    await monitoramento.destroy(monitoramento);

    res.send(JSON.stringify(monitoramento));
});


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));