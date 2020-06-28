/**Aqui configuramos las rutas */
const express = require("express");
const controller = require("../controller/user.controller");
const router = express.Router();
/**router() : permite configurar diferentes rutas utilizando 
 * los metodos HTTP
*/

router.get("/", controller.GetAllUser);

router.get("/:id", controller.GetUserById);

router.post("/", controller.CreateUser);

router.put("/:id", controller.UpdateUser);

router.delete("/:id", controller.DeleteUser);

module.exports = router;

