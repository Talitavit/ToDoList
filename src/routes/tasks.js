const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = Router();

router.post("/tasks", TaskController.store);
router.get("/tasks", TaskController.index);
router.get("/tasks/:id", TaskController.show);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.destroy);

module.exports = router;
