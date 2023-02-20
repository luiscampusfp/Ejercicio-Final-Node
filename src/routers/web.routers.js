const { Router } = require("express");
const Controlador = require("../controllers/web.controller");
const router = Router();

let controller = new Controlador();

router.get('/pedidos', controller.pedidos);
router.post('/pedidos', controller.listaPedidos);

module.exports = router;