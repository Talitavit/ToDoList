const { Router } = require('express');  
const TaskController = require("./controllers/TaskController");
const routes = Router();

routes.get("/health", (req, res) => {
    return res.staus(200).json({ message: "Servidor on"});
});
 
routes.post("/tasks", TaskController.store)
module.exports = routes;

