const app = require("./app");

app.listen(app.get('port'), function () {
    console.log("Servidor ejecutando en " + app.get('port'));
}); 
