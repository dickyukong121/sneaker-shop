let Todo = require('../models/todo-model')

addTodo = async (req, res) => {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
}

updateTodo = async (req, res) => {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        todo.save().then(todo => {
            res.json('Todo updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

}

getAllTodos = async (req, res) => {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
}

getTodo = async (req, res) => {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
}

module.exports = {
    addTodo,
    updateTodo,
    getAllTodos,
    getTodo,
}