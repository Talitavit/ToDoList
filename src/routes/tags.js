const { Router } = require("express");
const TagController = require("../controllers/TagController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", authMiddleware, TagController.store);
router.get("/", authMiddleware, TagController.index);
router.get("/:id", authMiddleware, TagController.show);
router.put("/:id", authMiddleware, TagController.update);
router.delete("/:id", authMiddleware, TagController.destroy);

module.exports = router;
