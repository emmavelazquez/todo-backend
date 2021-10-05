const {selectAllTareas, createTareaModel} = require("../models/tareas");

async function getAllTareas(){
    try{
        return await selectAllTareas();
    } catch (error){
        throw new Error("Nooo Tilin en services")
    }
}
//Actualiza la base de datos con la informaciom que pasa el api
async function createTarea(dataTarea){
    try{
        return await createTareaModel(dataTarea);
    } catch (error){
        throw new Error("Nooo Tilin en services. No mando la data.")
    }
}
//Exporta las funciones
module.exports = {
    getAllTareas, createTarea
};