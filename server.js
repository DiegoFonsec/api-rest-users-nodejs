const express = require("express");
//<Al ejecutar express() me crea un servidor
const app = express();

/**Establecemos un puerto 3000 en caso que nuestro 
 * proyecto no este corriendo en algun servidor dado.
 */
app.set("port", process.env.PORT || 3000);

/**Middleware : Soportan formato JSON, tambien son 
 * pequeñas funciones que filtran los request.
 * 
 * express.json() indica que nuestro servidor va 
 * aceptar formato json.
*/

app.use(express.json());
/*
app.use("/", (req, res)=>{
    res.json({mensaje : "Bienvenido"});
})
*/
app.use("/api/user", require("../proyectoKodoti-6/routes/user.route"));

//Puerto de cominicacion con el servidor
app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});