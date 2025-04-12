const { Router } = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.post("/create", UserController.store);
router.post("/login", UserController.login);

router.use(authMiddleware);

router.get("/list", UserController.index);
router.get("/show/:id", UserController.show);
router.put("/update/:id", UserController.update);
router.delete("/destroy/:id", UserController.destroy);

module.exports = router;
