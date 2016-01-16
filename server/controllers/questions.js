var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
  return{
    show: function(req, res){
      Question.find({}, function(err, results){
        if(err){
          console.log("error in finding customers")
        }
        else if(results){
          res.json(results)
        }
      })
    },
    showOne: function(req, res){
      Question.findOne({_id: req.body.id})
      .populate('answers')
      .exec(function(err, results){
        if(err){
          console.log("error in finding customer")
        }
        else if(results){
          console.log(results.answers)
          res.json(results)
        }
      })
    },
    add: function(req, res){
      var question = new Question({user: req.body.author, content: req.body.content, description: req.body.description})
      question.save(function(err){
        if(err){
          console.log("something went wrong in creating yor customer", err)
          res.json(err)
        }
        else{
          console.log("your customer has been added")
          res.redirect('/')
        }
      })
    }
  }
})();
