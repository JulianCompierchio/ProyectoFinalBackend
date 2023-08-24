const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelos.controller');
const { check } = require('express-validator');
const ExistenteCheck = require('../middlewares/vueloExists')

/* GET users listing. */
router.get('/ver', vuelosController.getVuelos);

router.get('/ver/destino/', vuelosController.getVuelosByDestino);

router.get('/ver/id/:id([0-9a-fA-F]{24})', vuelosController.getVueloById);

router.post('/crear', check("origen")
    .notEmpty().withMessage("El campo origen no puede estar vacio")
    .isString().withMessage("El campo origen debe tener un valor string"),
    check("destino")
    .notEmpty().withMessage("El campo destino no puede estar vacio")
    .isString().withMessage("El campo destino debe tener un valor string"),
    check("fecha_salida")
    .notEmpty().withMessage("El campo fecha_salida no puede estar vacio")
    .isString().withMessage("El campo fecha_salida debe tener un valor string"),
    check("fecha_llegada")
    .notEmpty().withMessage("El campo fecha_llegada no puede estar vacio")
    .isString().withMessage("El campo fecha_llegada debe tener un valor string"),
    check("hora_salida")
    .notEmpty().withMessage("El campo hora_salida no puede estar vacio")
    .isString().withMessage("El campo hora_salida debe tener un valor string"),
    check("duración")
    .notEmpty().withMessage("El campo duración no puede estar vacio")
    .isString().withMessage("El campo duración debe tener un valor string"),
    check("asientos_disponibles")
    .notEmpty().withMessage("El campo de asientos no puede estar vacio")
    .not().isString().withMessage("El campo de asientos debe tener un valor numérico")
    .isInt({min:0}).withMessage("El campo de asientos debe tener un valor entero igual o mayor a 0"),
    ExistenteCheck.vueloExists,
    vuelosController.createVuelo
);

router.put('/modificar/:id([0-9a-fA-F]{24})',check("origen")
    .notEmpty().withMessage("El campo origen no puede estar vacio")
    .isString().withMessage("El campo origen debe tener un valor string"),
    check("destino")
    .notEmpty().withMessage("El campo destino no puede estar vacio")
    .isString().withMessage("El campo destino debe tener un valor string"),
    check("fecha_salida")
    .notEmpty().withMessage("El campo fecha_salida no puede estar vacio")
    .isString().withMessage("El campo fecha_salida debe tener un valor string"),
    check("fecha_llegada")
    .notEmpty().withMessage("El campo fecha_llegada no puede estar vacio")
    .isString().withMessage("El campo fecha_llegada debe tener un valor string"),
    check("hora_salida")
    .notEmpty().withMessage("El campo hora_salida no puede estar vacio")
    .isString().withMessage("El campo hora_salida debe tener un valor string"),
    check("duración")
    .notEmpty().withMessage("El campo duración no puede estar vacio")
    .isString().withMessage("El campo duración debe tener un valor string"),
    check("asientos_disponibles")
    .notEmpty().withMessage("El campo de asientos no puede estar vacio")
    .not().isString().withMessage("El campo de asientos debe tener un valor numérico")
    .isInt({min:0}).withMessage("El campo de asientos debe tener un valor entero igual o mayor a 0"), 
    check("clima_destino")
    .notEmpty().withMessage("El campo de clima no puede estar vacio")
    .isString().withMessage("El campo de clima debe tener un valor string"),
    ExistenteCheck.vueloExists,
    vuelosController.updateVuelo
);

router.delete('/eliminar/:id([0-9a-fA-F]{24})', vuelosController.deleteVuelo);

module.exports = router;