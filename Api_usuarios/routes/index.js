const express = require('express')
const userCtrl = require('../controllers/user')
const app = express.Router()

app.get('/user/:userId', userCtrl.getUser)
app.post('/user', userCtrl.saveUser)
app.put('/user/:userId', userCtrl.updateUser)
app.delete('/user/:userId', userCtrl.deleteUser)

module.exports = app