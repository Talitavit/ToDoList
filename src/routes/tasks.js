const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = Router();

router.post("/", TaskController.store);
router.get("/", TaskController.index);
router.get("/:id", TaskController.show);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.destroy);

module.exports = router;
