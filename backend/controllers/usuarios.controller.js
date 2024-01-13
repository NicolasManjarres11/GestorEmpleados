const Usuario = require('../models/usuarios.model')
const crypto = require('crypto') //para funciones de hash
const jwt = require('jsonwebtoken') //generació y verificación de tokens

exports.login = (req, res, next) => {

    //contraseña hasheada
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex"); //crea el hash de la contraseña proporcionada

    Usuario.findOne({ usuario: req.body.usuario, pass: hashedpass}, function(err, usuario) {
        let response = {
            token: null
        }
        if(usuario !== null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__")
        }
        res.json(response)
    })
}