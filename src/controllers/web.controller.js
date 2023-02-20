const connection = require("./conexion");

class Controlador {

    constructor() { }

    pedidos(req, res) {
        if (req.query.id) {
            connection.query("SELECT COUNT(*) AS total FROM payment WHERE customer_id = " + req.query.id, function (err, result) {
                if (err) {
                    res.status(500).json({ mensaje: err.message });
                } else {
                    res.send(result[0]);
                }
            });
        } else if (req.query.correo) {
            connection.query("SELECT COUNT(*) AS total FROM payment p INNER JOIN customer c ON p.customer_id = c.customer_id  WHERE email = '" + req.query.correo + "'", function (err, result) {
                if (err) {
                    res.status(500).json({ mensaje: err.message });
                } else {
                    res.send(result[0]);
                }
            });
        } else {
            connection.query("SELECT COUNT(*) AS total FROM payment", function (err, result) {
                if (err) {
                    res.status(500).json({ mensaje: err.message });
                } else {
                    res.send(result[0]);
                }
            });
        }
    }

    listaPedidos(req, res) {
        connection.query("SELECT amount, payment_date FROM payment WHERE customer_id = " + req.body.id, function (err, result) {
            if (err) {
                res.status(500).json({ mensaje: err.message });
            } else {
                res.send(result);
            }
        });
    }
}

module.exports = Controlador;