// App.js
const express = require('express')

const app = express()
const port = 7070

// Mock DB
const db = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
    { id: 4, name: 'Jack' },
    { id: 5, name: 'Jill' },
    { id: 6, name: 'Jak' },
    { id: 7, name: 'Jana' },
    { id: 8, name: 'Jan' },
    { id: 9, name: 'Jas' },
    { id: 10, name: 'Jasmine' },
]

/* Routes */
app.get('/rabbits', (req, res) => {
    res.json(db)
})

app.get('/rabbits/:idx', (req, res) => {
    res.json(db[req.params.idx])
})

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
