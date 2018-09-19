const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller');

router.get('/', controller.getTodos);
router.post('/', controller.createTodo);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);

module.exports = router;

const timeLog = (req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
};

// middleware this router uses
router.use(timeLog);