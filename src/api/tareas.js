const express = require("express");
const router = express.Router();
const {getAllTareas, createTarea} = require("../services/tareas");

router.get("/setTarea", async function (req,res){
    try{
        const data = await getAllTareas();
        res.send(data);
    } catch (error){
        res.status(500).send({message:"Nooo Tilin en getAllTareas API"});
    }
});

router.post('/setTarea', async function(req, res){
    try {
        console.log(req.body)
        const dataTarea = req.body
        const data = await createTarea(dataTarea.tarea)
        res.send(data)
    } catch (error) {
        res.status(500).send("Noooo Tilin. No se hizo el post.")
    }
});

module.exports = router;