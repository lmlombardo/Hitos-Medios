'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
	nameBook : String,
	author : String,
	editorial : String,
	date: { type: Date, default: Date.now()) }
	ISBN : Number;
})


module.exports = mongoose.model('Book', BookSchema)