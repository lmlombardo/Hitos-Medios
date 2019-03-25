const express = require('express')
const userCtrl = require('../controllers/user')
const bookCtrl = require('../controllers/book')
const app = express.Router()


app.get('/book/:bookId', bookCtrl.getBook)
app.post('/book', bookCtrl.saveBook)
app.put('/book/:bookId', bookCtrl.updateBook)
app.delete('/book/:bookId', bookCtrl.deleteBook)


app.get('/user/:userId', userCtrl.getUser)
app.post('/user', userCtrl.saveUser)
app.put('/user/:userId', userCtrl.updateUser)
app.delete('/user/:userId', userCtrl.deleteUser)



module.exports = app