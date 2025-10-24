const Sequelize = require('sequelize');

const sequelize = new Sequelize( process.env.MYSQL_DB_SCHEMA, process.env.MYSQL_DB_USER, process.env.MYSQL_DB_PASSWORD, {
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    dialect: "mysql",
    operatorsAliases: 0,
    logging: console.log, // process.env.NODE_ENV === 'production' ? false : console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = {
    sequelize
}






















