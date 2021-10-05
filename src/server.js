const express = require('express');
const mongoose = require('mongoose');
const {uri} = require("./config/mongoose");
const tareaRoutes =require("./api/tareas")
var cors = require('cors')
const app = express()
const port = 3000
// uri defiida en config
mongoose.connect(uri)
const database = mongoose.connection;

app.use(cors())
app.use(express.json());

app.use("/setTarea", tareaRoutes)


app.listen(port, () => {
  console.log(`Vamos Tilin, estas conectado en http://localhost:${port} Tilin`)
})

database.once("open",() => {
    console.log("MongoDB andando Tilin")
});
database.addListener('error', console.error.bind(console, "Nooooo, Tilin : BD"));

/* //Schema tarea

const Schema = mongoose.Schema;

const tareaSchema = new Schema ({
  asignado: String,
  tarea: String,
  detalleTarea: String,
}); */

// modelo de tareas
/* const tareaModel = mongoose.model("tarea", tareaSchema); */

// consultas

/* tareaModel.find().then((data) => {
  console.log(
    "Buscando tareas", data
  );
}); */

// Crear tarea

/* tareaModel.create({
  asignado: "Alecs",
  tarea: "Tarea de prueba",
  detalleTarea: "String test",
}).then(data => {
  console.log("tareaModel data", data)
}); */

// Actualizar tarea
/* 
tareaModel.findByIdAndUpdate("615afb30ab7414a551eddd05",{asignado: 'Maui'},{new:true}).then( data =>{
  console.log("tarea actualizada",data)
})

tareaModel.find().then((data) => {
  console.log(
    "Buscando tareas", data
  );
}); */