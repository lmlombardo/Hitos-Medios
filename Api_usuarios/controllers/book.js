'use strict'

const Book = require('../models/book')
const mongoose = require('mongoose')


function getBook (req, res) {
	let bookId = req.params.bookId

	Book.findById(bookId, (err, book) => {
		if (err) return res.status(500).send({message: `No se pudo realizar la peticion, error:  ${err}`})
		if(!book) return res.status(404).send({message: "El libro no existe"})
	
		res.status(200).send({ book })
	})



}

function saveBook (req, res) {
	console.log('POST /api/book')
	console.log(req.body)

	let book = new Book()
	book.author = req.body.author
	book.namebook = req.body.namebook
	book.editorial = req.body.editorial
	book.ISBN = req.body.ISBN

	book.save((err, bookStored) => {
		if(err) res.status(500).send({message: `No se pudo guardar la base de datos, error: ${err}`})
		else res.status(200).send({book: bookStored})
	})
}

function updateBook (req, res) {
	let bookId = req.params.bookId
	let update = req.body

	Book.findByIdAndUpdate(bookId, update, (err, bookUpdated) => {
		if(err) res.status(500).send({message: `No se pudo actualizar el libro, error: ${err}`})

		res.status(200).send({ book: bookUpdated})
	})
}

function deleteBook (req, res) {
	let bookId = req.params.bookId

	Book.findById(bookId, (err, book) => {
		if(err) res.status(500).send({message: `No se pudo borrar el libro, error: ${err}`})
		
		book.remove(err => {
			if(err) res.status(500).send({message: `No se pudo borrar el libro, error: ${err}`})
			res.status(200).send({message: "El libro ha sido eliminado"})
		})
	})
}

module.exports = {
	getBook,
	saveBook,
	updateBook,
	deleteBook
}