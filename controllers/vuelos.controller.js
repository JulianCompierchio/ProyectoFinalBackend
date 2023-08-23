const Vuelo = require('../models/Vuelo');
const Clima = require('./clima.controller');

const getVuelos = async (req,res) => {
    try {
        const vuelos = await Vuelo.find();
        res.status(200).json({msg:'OK', vuelos: vuelos});
    } catch (error) {
        res.status(500).json({msg:'Error : ' + error.message, vuelos: null});
    }
}

const getVueloById = async (req,res) => {
    try{
        const id_vuelo = req.params.id;
        const vuelo = await Vuelo.findById(id_vuelo);
        res.status(200).json({msg:'OK', vuelo: vuelo});
    }
    catch (error) {
        res.status(500).json({msg:'Error : ' + error.message, vuelo: null});
    }
}

const getVuelosByDestino = async (req,res) => {
    try{
        const destino = req.query.destino;
        const vuelo = await Vuelo.find({ destino: destino});
        res.status(200).json({msg:'OK', vuelo: vuelo});
    }
    catch (error) {
        res.status(500).json({msg:'Error : ' + error.message, vuelo: null});
    }
}

const createVuelo = async (req,res) => {
    try {
        //Pedido del clima a la api para luego guardarlo
        //La api solo funciona con destinos 
        const clima_data = await Clima.getClimas(req.body.destino);
        //Agregado de la propiedad clima_destino al body para guardarlo en la db
        req.body.clima_destino = clima_data;
        const vuelo = new Vuelo(req.body)
        await vuelo.save();
        res.status(201).json({msg:'Vuelo Creado Exitosamente'});

    } catch (error) {
        res.status(500).json({msg:'Error al crear vuelo: ' + error.message});
    }
}

const updateVuelo = async (req,res) => {
    try {
        const id_vuelo = req.params.id;
        await Vuelo.findByIdAndUpdate(id_vuelo, req.body);
        res.status(200).json({msg:'Vuelo Modificado Exitosamente'});
    } catch (error) {
        res.status(500).json({msg:'Error al modificar vuelo: ' + error.message});
    }
}

const deleteVuelo = async (req,res) => {
    try {
        const id_vuelo = req.params.id;
        await Vuelo.findByIdAndDelete(id_vuelo);
        res.status(200).json({msg:'Vuelo Eliminado Exitosamente'});
    } catch (error) {
        res.status(500).json({msg:'Error al eliminar vuelo: ' + error.message});
    }
}

module.exports = { getVuelos, getVueloById, getVuelosByDestino , createVuelo, updateVuelo, deleteVuelo}