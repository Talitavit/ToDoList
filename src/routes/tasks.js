const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.use(authMiddleware);
router.post("/create", TaskController.store);
router.get("/", TaskController.index);
router.get("/:id", TaskController.show);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.destroy);

module.exports = router;
