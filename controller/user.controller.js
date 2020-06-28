/**Controller : Va ser un intermediario entre el CLIENTE y el SERVICIO */

let userService = require("../services/user.service");

class UserController{

    async GetAllUser(req, res){
        await res.json(userService.GetAllUser());
    }

    //Capturamos el ID enviando como parametros el id de la peticion
    async GetUserById(req, res){
        let indice = userService.GetUserById(req.params.id)
         
        //Comparamos si el Id existe
        if (indice == -1){
            return res.write("<h1>No se encontro el indice !!</h1>");
        }else{
            return res.json(userService.GetUserById(req.params.id));
        }
        
    }

    //Crear usuario con el conjunto de datos que tenemos en el body de la peticion
    async CreateUser(req, res){
        await res.json(userService.CreateUser(req.body));
    }

    async UpdateUser(req, res){
        await res.json(userService.UpdateUser(req.params.id, req.body));
    }
    async DeleteUser(req, res){
        await res.json(userService.DeleteUser(req.params.id));
    }
} 

module.exports = new UserController;
