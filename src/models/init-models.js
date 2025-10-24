var DataTypes = require("sequelize").DataTypes;
var _Estudiante = require("./Estudiante");

function initModels(sequelize) {
  var Estudiante = _Estudiante(sequelize, DataTypes);


  return {
    Estudiante,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
