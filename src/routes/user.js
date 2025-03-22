const { Router } = require("express");
const UserController = require("../controllers/UserController");
const router = Router();

router.post("/create", UserController.store);
router.post("/login", UserController.login);
router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

module.exports = router;
