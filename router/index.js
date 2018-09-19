const todos = require('./todo.router');
const express = require('express');
const routers = express();

routers.use("/todos", todos);

module.exports = routers;