const axios = require('axios');
require('dotenv').config();

const getClimas = async(destino,res) => {  

    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: destino},
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        //request a la api
        const clima = await axios.request(options);
        const clima_data = 'Temperatura actual: ' + clima.data.temp + 'º, Temperatura Mínima: ' + clima.data.min_temp + 'º, Temperatura Máxima: ' + clima.data.max_temp + 'º, Humedad: ' + clima.data.humidity + '%';
        return clima_data;
    } catch (error) {
        res.status(500).json({msg:'Error al obtener los datos del clima : ' + error.message});
    }    
}

module.exports = { getClimas } ;