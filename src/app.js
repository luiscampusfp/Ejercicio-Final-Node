const express = require('express');
const cors = require('cors');
const router = require('./routers/web.routers');
const server = express();
const errorHandler = require("./errors/errorHandling");

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(router);
server.use(function (req, res) {
    res.status(404).json({
        error: true,
        codigo: 404,
        mensaje: "No se encuentra el recurso"
    })
});
server.use(errorHandler);

server.set('port', 3000 || process.env.PORT);

module.exports = server;