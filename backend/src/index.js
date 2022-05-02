const express = require('express');
const app = express();
const database = require('../db')
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Avaliação GCT',
            description: 'documentação da api de monitoramentos de placas.',
            contact: {
                name: 'Rafael Marques'
            },
            servers: ['http://localhost:5000']
        },
        components:{
            schemas: require('../schemas.json')
        }
    },
    apis: ['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(express.json());
const Monitoramento = require('../monitoramento');

/**
 * @swagger
 * /monitoramentos:
 *  get:
 *    tags:
 *     - Monitoramentos
 *    description: Retorna todos os monitoramentos cadastrados
 *    responses:
 *      '200':
 *         description: Monitoramentos retornados com sucesso!
 */
app.get('/monitoramentos', async (req, res) => {

    const monitoramentos = await Monitoramento.findAll();

    res.status(200).send(JSON.stringify(monitoramentos))
});

/**
 * @swagger
 * /create:
 *   post:
 *     tags:
 *       - Monitoramentos
 *     description: cadastra um novo monitoramento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: monitoramento
 *         description: modelo de monitoramento
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Create'
 *     responses:
 *       200:
 *         description: Monitoramento cadastrado com sucesso!
 */
app.post('/create', async (req, res) => {

    const { placa, data_inicio, data_termino } = req.body;

    const monitoramento = await Monitoramento.create({
        placa: placa,
        data_inicio: data_inicio,
        data_termino: data_termino
    });

    res.status(200).send(JSON.stringify(monitoramento));
});

/**
 * @swagger
 * /update:
 *   put:
 *     tags:
 *       - Monitoramentos
 *     description: atualiza um monitoramento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: monitoramento
 *         description: modelo de monitoramento
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Monitoramento'
 *     responses:
 *       200:
 *         description: monitoramento atualizado com sucesso!
 */
app.put('/update', async (req, res) => {

    const { id, placa, data_inicio, data_termino } = req.body;

    const monitoramento = await Monitoramento.findByPk(id);

    monitoramento.placa = placa;
    monitoramento.data_inicio = data_inicio;
    monitoramento.data_termino = data_termino;
    await monitoramento.save(monitoramento);

    res.send(JSON.stringify(monitoramento));
});

/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *    tags:
 *      - Monitoramentos
 *    description: deleta um monitoramento
 *    responses:
 *      '200':
 *         description: Monitoramento deletado com sucesso!
 *  parameters:
 *      - name: id
 *        description: id do monitoramento a ser excluido.
 *        in: path
 *        required: true
 *        type: integer
 *        schema:
 *          $ref: '#/components/schemas/Monitoramento'
 *          
 */
app.delete('/delete/:id', async (req, res) => {

    const monitoramento = await Monitoramento.findByPk(req.params.id);

    await monitoramento.destroy(monitoramento);
    res.send(JSON.stringify(monitoramento));
});


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));