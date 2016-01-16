var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var answerValidator = [
  validate({
    validator: 'isLength',
    arguments: [5, 200],
    message: 'Answer should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
];

var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  user: String,
  content: {type: String, required: true, validate: answerValidator},
  details: String,
  likes: {type: Number, default: 0},
  created: {type: Date, default: Date.now},
  _question: {type: Schema.Types.ObjectId, ref:'Question'}
})

var Answer = mongoose.model('Answer', AnswerSchema)
