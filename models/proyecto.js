const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: true
    },
    titulo: {
        type: String,
        required: [true, 'Debe colocar un título'],
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'Debe colocar una fecha de inicio'],
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'Debe colocar una fecha de entrega'],
    },
    valor: {
        type: String,
        required: [true, 'Debe colocar un valor'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    }
});

module.exports = model('Proyecto', ProyectoSchema);