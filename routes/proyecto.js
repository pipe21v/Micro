const { Router } = require('express');
const { createProyecto,
    getProyectos,
    getProyectoById,
    updateProyectoById
} = require('../controllers/proyecto');

const router = Router();


//Obtiene todos los proyectos
router.get('/', getProyectos);

//Obtiene un inventario por id
router.get('/:id', getProyectoById);

//Crear un inventario
router.post('/', createProyecto);

//Actualiza un inventario por id
router.put('/:id', updateProyectoById);


module.exports = router;