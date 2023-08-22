const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelos.controller');

/* GET users listing. */
router.get('/ver', vuelosController.getVuelos);

router.get('/ver/:id', vuelosController.getVueloById);

router.post('/crear', vuelosController.createVuelo);

router.put('/modificar/:id', vuelosController.updateVuelo);

router.delete('/eliminar/:id', vuelosController.deleteVuelo);

module.exports = router;