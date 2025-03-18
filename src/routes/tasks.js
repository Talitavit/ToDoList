const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", authMiddleware, TaskController.store);
router.get("/", authMiddleware, TaskController.index);
router.get("/:id", authMiddleware, TaskController.show);
router.put("/:id", authMiddleware, TaskController.update);
router.delete("/:id", authMiddleware, TaskController.destroy);

module.exports = router;
