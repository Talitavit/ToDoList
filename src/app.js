<<<<<<< HEAD
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/api", routes);
=======
const express = require('express');
const routes = require("./routes");

const app  = express();

app.use(express.json());
app.use(routes);    
>>>>>>> 5432b72b35184516a5417e6aaf485f1af0eeba43

module.exports = app;
