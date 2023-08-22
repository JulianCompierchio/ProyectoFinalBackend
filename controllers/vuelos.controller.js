const Vuelo = require('../models/Vuelo');

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

const createVuelo = async (req,res) => {
    try {
        const vuelo = new Vuelo(req.body);
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

module.exports = { getVuelos, getVueloById , createVuelo, updateVuelo, deleteVuelo}