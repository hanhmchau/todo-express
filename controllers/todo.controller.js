const service = require('../services/todo.services');

exports.getTodos = (req, res) => {
    service.getTodos()
        .then(result => res.json(result.data))
        .catch(err => res.sendStatus(500))
};

exports.createTodo = (req, res) => {
    const newData = req.body;
    if (newData.name.length) {
        service.createTodo(newData)
            .then(result => res.json(result.data))
            .catch(err => res.sendStatus(500));
    } else {
        res.status(400).json({
            message: 'Validation error'
        });
    }
};

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    if (newData.name.length) {
        service.updateTodo(id, newData)
            .then(result => res.sendStatus(204))
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    } else {
        res.status(400).json({
            message: 'Validation error'
        });
    }
};

exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    service.deleteTodo(id)
        .then(() => res.sendStatus(204))
        .catch(err => res.sendStatus(500));
};

// exports.getTodos = (req, res) => {
//     let done = data => {
//         res.json(JSON.parse(data));
//     };
//     service.getTodos(done);
// };