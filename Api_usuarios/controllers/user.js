'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')

function getUser (req, res) {
	let userId = req.params.userId

	User.findById(userId, (err, user) => {
		if (err) return res.status(500).send({message: `No se pudo realizar la peticion, error:  ${err}`})
		if(!user) return res.status(404).send({message: "El usuario no existe"})
	
		res.status(200).send({ user })
	})
}

function saveUser (req, res) {
	console.log('POST /api/user')
	console.log(req.body)

	let user = new User()
	user.email = req.body.email
	user.password = req.body.password
	user.date = req.body.date

	user.save((err, userStored) => {
		if(err) res.status(500).send({message: `No se pudo guardar la base de datos, error: ${err}`})
		else res.status(200).send({user: userStored})
	})
}

function updateUser (req, res) {
	let userId = req.params.userId
	let update = req.body

	User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
		if(err) res.status(500).send({message: `No se pudo actualizar el usuario, error: ${err}`})

		res.status(200).send({ user: userUpdated})
	})
}

function deleteUser (req, res) {
	let userId = req.params.userId

	User.findById(userId, (err, user) => {
		if(err) res.status(500).send({message: `No se pudo borrar el usuario, error: ${err}`})
		
		user.remove(err => {
			if(err) res.status(500).send({message: `No se pudo borrar el usuario, error: ${err}`})
			res.status(200).send({message: "El usuario ha sido eliminado"})
		})
	})
}

module.exports = {
	getUser,
	saveUser,
	updateUser,
	deleteUser
}