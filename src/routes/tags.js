const { Router } = require("express");
const TagController = require("../controllers/TagController");

const router = Router();

router.post("/tags", TagController.store);
router.get("/tags", TagController.index);
router.get("/tags/:id", TagController.show);
router.put("/tags/:id", TagController.update);
router.delete("/tags/:id", TagController.destroy);

module.exports = router;
