const epxress = require('express')
const app = epxress()

app.use(epxress.json())

//Import all routes
const todo = require('./routes/todo')

app.use('/api/', todo)

module.exports = app