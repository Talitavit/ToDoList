const express = require("express");
const router = express.Router();

const userRoutes = require("./user.js");
const taskRoutes = require("./tasks.js");
const tagRoutes = require("./tags.js");

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
