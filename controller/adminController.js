const adminServ = require("../services/adminService");

exports.createEstud = async (req, res, next) => {
    try {

        let params = {
            nombre: req.body.nombre,
            edad: req.body.edad
        };

        await adminServ.crearEstudiante(params);
        res.status(200).json({
            success: true,
            message: "Estudiante agregado con éxito",
        });
    } catch (error) {
        res.status(406).json({
            success: false,
            message: "Problemas al crear estudiante, inténtelo de nuevo",
            error: error.errors?.map(e => e.message) || error.message || "Error desconocido"
        });
    }
};


exports.busquedaEstu = async (req, res, next) => {
    try {
        console.log("entra");
        
        let busquedaEstudiant = await adminServ.busquedaEstudiantes();
        if (busquedaEstudiant.length > 0) {
            res.status(200).json({
                success: true,
                data: busquedaEstudiant,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "No hay estudiantes registrados",
            });
        }

    } catch (error) {
        res.status(406).json({
            success: false,
            message: "Problemas al verificar estudiantes, inténtelo de nuevo",
            error: error.errors?.map(e => e.message) || error.message || "Error desconocido"
        });
    }
};

exports.eliminarEstudianteId = async (req, res, next) => {
    try {
        
        let user = await adminServ.deleteEstudiante(req.params.id)


        if (user > 0) {
            res.status(200).json({
                success: true,
                 message: "Estudiante eliminado con éxito ",
            });
        } else {
            res.status(404).json({
                success: true,
                message: "No se encontró el estudiante id ",
            });
        }

    } catch (error) {
        res.status(406).json({
            success: false,
            message: "Problemas al verificar estudiante, inténtelo de nuevo",
            error: error.errors?.map(e => e.message) || error.message || "Error desconocido"
        });
    }
};

exports.estudianteId = async (req, res, next) => {
    try {
        

        let user = await adminServ.busquedaEstudId(req.params.id)


        if (user) {
            res.status(200).json({
                success: true,
                data: user,
            });
        } else {
            res.status(404).json({
                success: true,
                message: "No existe el estudiante",
            });
        }

    } catch (error) {
        res.status(406).json({
            success: false,
            message: "Problemas al verificar estudiante, inténtelo de nuevo",
            error: error.errors?.map(e => e.message) || error.message || "Error desconocido"
        });
    }
};