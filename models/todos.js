const mongoose = require('mongoose');

const todosScheme = new mongoose.Schema({
    description: String,
    complete: Boolean
});

module.exports.Todos =  mongoose.model('Todos', todosScheme);"description" 