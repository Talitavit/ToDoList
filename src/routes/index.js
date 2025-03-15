const express = require("express");
const userRoutes = require("./routes/user");
const taskRoutes = require("./tasks");
const tagRoutes = require("./tags");

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/tasks", taskRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
