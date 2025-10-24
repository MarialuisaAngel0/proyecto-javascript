const db = require("../src/models");

let userRepository = function () {

    let crearEstudiante = async (params) => {
        try {
            return await db.models.Estudiante.create({
                Nombre: params.nombre,
                Edad: params.edad,
            });
        } catch (error) {
            throw error;
        }
    };

    let busquedaEstudiantes = async (params) => {
        try {
            const estudiantes = await db.models.Estudiante.findAll({
                where: {
                    Status: 1
                }
            });
            return estudiantes;

        } catch (error) {
            throw error;
        }
    };

    let deleteEstudiante = async (params) => {
        try {
            const [updatedRows] = await db.models.Estudiante.update(
                {
                    Status: 0
                },
                {
                    where: {
                        Id: params,
                        Status: 1
                    }
                }
            );
            return updatedRows;
        } catch (error) {
            throw error
        }
    };

    let busquedaEstudId = async (params) => {
        try {
            const estudiante = await db.models.Estudiante.findOne({
                where: {
                    Id: params,
                    Status: 1,
                },
                required: true,
            });
            return estudiante;
        } catch (error) {
            throw error
        }
    };

    return {
        crearEstudiante,
        busquedaEstudiantes,
        deleteEstudiante,
        busquedaEstudId

    };
};

module.exports = userRepository();
