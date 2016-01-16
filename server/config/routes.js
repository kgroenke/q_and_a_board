var default_controller = require('./../controllers/default_controller.js');

var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app){
  app.post('/question/add', function(req, res){
    questions.add(req, res);
  })
  app.get('/questions', function(req, res){
    questions.show(req, res);
  })
  app.post('/answer/add', function(req, res){
    answers.add(req, res);
  })
  app.post('/question', function(req, res){
    questions.showOne(req, res);
  })
  app.post('/answer/like', function(req, res){
    answers.update(req, res);
  })
}
