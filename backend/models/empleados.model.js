const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema ({
    nombre:{type: String, required: true, max:60},
    apellido_p:{type: String, required: true, max:40},
    apellido_m:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:10},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150}
});

module.exports = mongoose.model("empleados", EmpleadosSchema)

//mongoose.model compila un modelo basandose de un esquema, el primer argumento es el nombre del modelo y el segundop es el esquema con el que se va a basar