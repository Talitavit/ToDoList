const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.use(authMiddleware);
router.post("/create", TaskController.store);
router.get("/list", TaskController.index);
router.get("/show/:id", TaskController.show);
router.put("/update/:id", TaskController.update);
router.delete("/destroy/:id", TaskController.destroy);

module.exports = router;
