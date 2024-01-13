const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario:{type: String, required: true, max:100},
    pass:{type: String, required: true, max:128} //128 porque son los caracteres máximos que permiten nuestra tecnología
})

module.exports = mongoose.model("usuarios", UsuarioSchema);