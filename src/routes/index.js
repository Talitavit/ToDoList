const express = require("express");
const taskRoutes = require("./tasks"); // Importa o arquivo tasks.js
const tagRoutes = require("./tags"); // 🚨 IMPORTANTE: Faltava importar as tags

const router = express.Router();

router.use("/tasks", taskRoutes);
router.use("/tags", tagRoutes); // ✅ Agora tags também estão incluídas

module.exports = router;
