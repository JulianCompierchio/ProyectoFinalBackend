const mongoose = require ('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Base de Datos conectada exitosamente');
    } catch (error) {
        console.log(`Error al conectar con la base de datos - Error : ${error.message}`) 
    }
}

module.exports = connection;