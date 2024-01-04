const Empleado = require('../models/empleados.model')

//objeto de respuesta

let response = {
    msg: "",
    exito: false,
}

//función para crear un dato y para saber cuando un dato fue guardado correctamente

exports.create = function (req, res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
    })

    //save es un método para guardar
    
    empleado.save(function (err) {
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente",
        res.json(response)
    })
}

