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
            console.log(false),
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

exports.find = (req, res) => {
    Empleado.find(function(err, empleados) {
        res.json(empleados)
    })
}

exports.findOne = (req, res) => {
    Empleado.findOne({_id: req.params.id}, function(err, empleados) {
        res.json(empleados)
    })
}

exports.update = (req, res) => {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
    }

    //Llamamos el método findByIdAndUpdate para que busque por id y actualice los datos del empleado que maneja dicho ID

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function (err){
        if(err){
            console.error(err);
            response.exito = false;
            response.msg = "Error al modificar el empleado",
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El empleado se modificó correctamente"
        res.json(response);
    })
}

exports.remove = function(req, res){
    Empleado.findByIdAndDelete({_id: req.params.id}, function(err){
        if(err){
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar el empleado",
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El empleado se eliminó correctamente"
        res.json(response);
    })
}

