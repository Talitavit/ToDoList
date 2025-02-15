const { Router } = require('express');  
const routes = Router();
const TaskController = require("./controllers/TaskController");
const TagController = require("./controllers/TagController");


routes.get("/health", (req, res) => {
    return res.status(200).json({ message: "Servidor on"});
});
 
routes.post("/tasks", TaskController.store)
routes.get("/tasks", TaskController.index); 
routes.get("/tasks/:id", TaskController.show);   
routes.put("/tasks/:id", TaskController.update);    
routes.delete("/tasks/:id", TaskController.destroy);

routes.post("/tags", TagController.store)
routes.get("/tags", TagController.index); 
routes.get("/tags/:id", TagController.show);   
routes.put("/tags/:id", TagController.update);    
routes.delete("/tags/:id", TagController.destroy);

module.exports = routes;

