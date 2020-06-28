const userData = require("../db/context");
const { push } = require("../db/context");

/**Esta clase va a contener los metodos para realizar 
 * las diferentes operaciones CRUD
*/
class UserService{

    //Obtenemos todos los usuarios del arreglo
    GetAllUser(){
        return userData;
    }

    //Obtenemos el Id comparandolo con los demas ids del arreglo
    GetIndex(id){
        /*
        uData = (data) => {return data.id.toString() === id.toString()};
        return userData.findIndex(uData);
        */
       //findIndex recorre una matriz elemento por elemento hasta encontrar el valor deseado
       //data = al indice de userData.
        return userData.findIndex((data)=>{return data.id.toString() === id.toString()})
    }

    //Obtenemos un usuario del arreglo gracias a su Id
    GetUserById(id){
        let index = this.GetIndex(id);

        if(index == -1){
            console.log("Elemento no enecontrado en la matriz");
            return index;
        }else{
            return userData[index];
        }
    }

    //Creamos usuarios obteneniendo un set de datos y lo introducimos al final del arreglo
    CreateUser(data){
        //push() agrega elementos a una matriz al final
        userData.push(data);
        return "Usuario creado OK !!";
    }

    //Actualizamos un usuario buscando su id y pasando los datos del set nuevo al arreglo
    UpdateUser(id, data){
        let index = this.GetIndex(id);

        userData[index].userName = data.userName;
        userData[index].email = data.email;
        userData[index].password = data.password;
        userData[index].createDate = data.createDate;

        return "Usuario Actualizado";
    }

    //eliminamos un elemento del arreglo basado en su id.
    DeleteUser(id){
        let index = this.GetIndex(id);
        //Elimina un elemento de un arreglo de acuerdo a su (indiceInicial, indiceFinal)
        userData.splice(index, index);

        return `indice ${index+1} eliminado !!`;
    }
}

module.exports = new UserService;