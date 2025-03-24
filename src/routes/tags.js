const { Router } = require("express");
const TagController = require("../controllers/TagController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.use(authMiddleware);

router.post("/create", TagController.store);
router.get("/list", TagController.index);
router.get("/:id", TagController.show);
router.put("/:id", TagController.update);
router.delete("/:id", TagController.destroy);

module.exports = router;
