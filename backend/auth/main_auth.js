//lógica para verificar que el token cuenta con permisos

const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    //extracción y verificación del token 
    try {
        const token = req.headers.authorization.split(" ")[1] //se divide encabezado para obtener el token 
        const decoded = jwt.verify(token, "__recret__") ////verifica autenticidad con el secreto, en este caso recret, si la verificación es exitosa, el contenido del token decodificado se almacenará en esta variable
        req.usuario = decoded
        next()
    } catch (error){
        res.status(401) //código de error HTTP 401 indicia que el request no se ejecuta porque carece de credenciales válidas para autenticarse al recurso solicitado
        res.json({code: 4, msg: "No tienes permisos para acceder"})
    }
}

module.exports = auth

