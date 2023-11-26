const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
    },
    email: {
        type: String,
        required: [true, 'email es requerido'],
        unique: [true, 'email debe ser unico']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Cliente', ClienteSchema);