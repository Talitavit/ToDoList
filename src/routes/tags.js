const { Router } = require("express");
const TagController = require("../controllers/TagController");

const router = Router();

router.post("/", TagController.store);
router.get("/", TagController.index);
router.get("/:id", TagController.show);
router.put("/:id", TagController.update);
router.delete("/:id", TagController.destroy);

module.exports = router;
