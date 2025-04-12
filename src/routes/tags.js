const { Router } = require("express");
const TagController = require("../controllers/TagController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.use(authMiddleware);

router.post("/create", TagController.store);
router.get("/list", TagController.index);
router.get("/show/:id", TagController.show);
router.put("/update/:id", TagController.update);
router.delete("/destroy/:id", TagController.destroy);

module.exports = router;
