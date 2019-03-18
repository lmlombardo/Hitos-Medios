'use strict'

const config = require('./config')
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(config.db, {useNewUrlParser: true }, (err, res) => {
	if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion establecida')

    app.listen(config.port, () => {
        console.log('Puerto de la api: ' + config.port);
    });
})
