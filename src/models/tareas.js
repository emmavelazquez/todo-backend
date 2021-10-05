const mongoose = require('mongoose');
//Schema tarea

const Schema = mongoose.Schema;

const tareaSchema = new Schema ({
  asignado: String,
  tarea: String,
  detalleTarea: String,
});

// modelo de tareas

const tareaModel = mongoose.model("tareas", tareaSchema);

//
async function selectAllTareas(){
    var tarea = await tareaModel.find();
    return tarea;
    
}

//importar tarea desde services

async function createTareaModel(tarea){
    console.log(tarea)
    return await tareaModel.create(
        {asignado: tarea.asignado,
        tarea: tarea.tarea,
        detalleTarea: tarea.detalleTarea}
    );
}


module.exports = {
    selectAllTareas, createTareaModel
}