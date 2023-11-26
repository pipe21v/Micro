const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const TipoProyecto = require('../models/tipoProyecto');
const Cliente = require('../models/cliente');
const Etapa = require('../models/etapa');
const Universidad = require('../models/universidad');

//crear proyecto
const createProyecto = async (req = request, res = response) => {
    try {
        const {
            numero,
            titulo,
            fechaIniciacion,
            fechaEntrega,
            valor,
            tipoProyecto,
            cliente,
            etapa,
            universidad,
        } = req.body;

        // Verificar que las referencias existan antes de crear el proyecto
        const tipoProyectoExists = await TipoProyecto.findById(tipoProyecto);
        const clienteExists = await Cliente.findById(cliente);
        const etapaExists = await Etapa.findById(etapa);
        const universidadExists = await Universidad.findById(universidad);

        if (!tipoProyectoExists || !clienteExists || !etapaExists || !universidadExists) {
            return res.status(400).json({ msg: 'Referencia no encontrada para una o más claves foráneas' });
        }

        const proyectoBD = await Proyecto.findOne({
            numero,
            titulo,
            fechaIniciacion,
            fechaEntrega,
            valor,
            tipoProyecto,
            cliente,
            etapa,
            universidad,
        });

        if (proyectoBD) {
            return res.status(400).json({ msg: 'Ya existe proyecto' });
        }

        const datos = {
            numero,
            titulo,
            fechaIniciacion,
            fechaEntrega,
            valor,
            tipoProyecto,
            cliente,
            etapa,
            universidad,
        };

        const proyecto = new Proyecto(datos);

        await proyecto.save();

        return res.status(201).json(proyecto);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

//consultar todos
const getProyectos = async (req, res = response) => {
    try {
        const proyectoBD = await Proyecto.find()
        return res.json(proyectoBD);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }

}


//Consultar  por Id
const getProyectoById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const query = { _id: id };
        const proyecto = await Proyecto.findOne(query);
        return res.json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
}


//Actualiza  por su ID
const updateProyectoById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true });
        res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }

}

module.exports = {

    createProyecto,
    getProyectos,
    getProyectoById,
    updateProyectoById

};