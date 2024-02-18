// Route Layer
// holds each of the endpoints related to this entity and links them to the corresponding controller (the function we want to execute when the request hits that endpoint)
const express = require('express')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// CRUD - Create, read, update and delete
const { listRabbits, getRabbit, editRabbit, addRabbit, deleteRabbit } = require('../controllers/rabbits.controller')

const router = express.Router()

router.get('/', listRabbits)

router.get('/:id', getRabbit)

router.put('/:id', jsonParser, editRabbit)

router.post('/', jsonParser, addRabbit)

router.delete('/:id', deleteRabbit)

module.exports = router