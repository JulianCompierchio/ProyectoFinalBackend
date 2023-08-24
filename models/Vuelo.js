const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const vueloSchema = new Schema({
        origen: {
            type: String,
            required: true,
        },
        destino:{
            type: String,
            required: true, 
        },
        fecha_salida: {
            type: String,
            required: true,
        },
        fecha_llegada: {
            type: String,
            required: true,
        },
        hora_salida: {
            type: String,
            required: true,
        },
        duración: {
            type: String,
            required: true,
        },
        asientos_disponibles: {
            type: Number,
            required: true,
        },
        clima_destino: {
            type: String,
            required: true,
        }
})

const Vuelo = mongoose.model('Vuelo', vueloSchema);

module.exports = Vuelo;