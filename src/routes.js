const { Router } = require('express');  
const TaskController = require("./controllers/TaskController");
const routes = Router();

routes.get("/health", (req, res) => {
    return res.staus(200).json({ message: "Servidor on"});
});
 
routes.post("/tasks", TaskController.store)
routes.get("/tasks", TaskController.index); 
routes.get("/tasks/:id", TaskController.show);   
routes.put("/tasks/:id", TaskController.update);    
routes.delete("/tasks/:id", TaskController.destroy);

module.exports = routes;

