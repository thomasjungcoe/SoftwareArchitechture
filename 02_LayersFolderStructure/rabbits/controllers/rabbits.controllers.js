// controller module
// hold the logic corresponding to each endpoints. 
// Here is where we program what the function should take as input, what process should it perform and what should it return
// Moreover, each controller links to the corresponding model function (which will perform database related operations)
const { getAllItems, getItem, editItem, addItem, deleteItem } = require('../models/rabbits.model')

const listRabbits = (req, res) => {
    try {
        const resp = getAllItems()
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getRabbit = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const editRabbit = (req, res) => {
    try {
        const resp = editItem(req.params.id, req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const addRabbit = (req, res) => {
    try {
        console.log( req.body.item )
        const resp = addItem(req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteRabbit  = (req, res) => {
    try {
        const resp = deleteItem(req.params.id)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { listRabbits, getRabbit, editRabbit, addRabbit, deleteRabbit  }