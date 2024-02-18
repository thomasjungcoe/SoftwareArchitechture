// controller layer
// changes to define the routes, connect to the corresponding model function, and render the corresponding view for each request.
// See that in the render method we're passing the request response as a parameter to the view

const express = require('express')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const { getAllItems, getItem, editItem, addItem, deleteItem } = require('../models/rabbits.models')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const resp = getAllItems()
        res.render('rabbits', { rabbits: resp })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.get('/:id', (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.render('rabbit', { rabbit: resp })
    } catch(err) {
        res.status(500).send(err)
    }
})

router.put('/:id', jsonParser, (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.render('editRabbit', { rabbit: resp })
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/', jsonParser, (req, res) => {
    try {
        const resp = addItem(req.body.item)
        res.render('addRabbit', {rabbits:resp})
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/:id', (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.idx))
        res.render('deleteRabbit', { rabbits: resp })
    } catch (err) {
        res.status(500).send(err)
    }
})

module.export = router 