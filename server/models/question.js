var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var questionValidator = [
  validate({
    validator: 'isLength',
    arguments: [10, 200],
    message: 'Question should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
];

var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  user: String,
  content: {type: String, required: true, validate: questionValidator},
  description: String,
  created: {type: Date, default: Date.now},
  answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
})

var Question = mongoose.model('Question', QuestionSchema)
