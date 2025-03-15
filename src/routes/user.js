const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.post("/users", UserController.store);
router.post("/users/login", UserController.login);
router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

module.exports = router;
