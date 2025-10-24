const express = require('express');
// const { body, query } = require('express-validator');
const router = express.Router();

const adminController = require('../controller/adminController')

router.get("/estudiantes",  adminController.busquedaEstu) 
router.get("/busqueEstudiante/:id",  adminController.estudianteId) 
router.post("/creacionEstudiantes",  adminController.createEstud)
router.delete("/eliminarEstudiante/:id",  adminController.eliminarEstudianteId) 
module.exports = router