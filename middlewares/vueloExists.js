const Vuelo = require('../models/Vuelo');

const vueloExists = async (req,res,next) => {
    try {
        const vuelo = await Vuelo.findOne({origen: req.body.origen, destino: req.body.destino, fecha_salida: req.body.fecha_salida, fecha_llegada: req.body.fecha_llegada});
            if (vuelo){
                res.status(400).json({msg: 'El vuelo ya existe'});
            }else{
                next();
            }
    } catch (error) {
        res.status(500).json({msg: 'Error al comunicarse a la base de datos ' + error.message});
    }
}

module.exports = { vueloExists };