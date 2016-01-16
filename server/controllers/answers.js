var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = (function(){
  return{
    add: function(req, res){
      console.log("in answer controler", req.body)
      var answer = new Answer({_question: req.body._question, content: req.body.content, details: req.body.details, user: req.body.user});
      answer.save(function(err){
        if(err){
          console.log(err)
          console.log("error saving answer")
          res.json(err)
        }
        else{
          Question.findOne({_id: req.body._question}, function(err, question){
            question.answers.push(answer)
            console.log("answers", answer)
            console.log(question.answers)
            question.save(function(err){
              if(err){
                console.log("error in updating questions", err)
                res.json(err)
              }
              else{
                console.log("question updated and saved")
                res.redirect('/')
              }
            })
          })
        }
      })
    },
    update: function(req, res){
      Answer.update({_id: req.body.id}, {$inc: {likes:1}}, function(err){
        if(err){
          console.log("something went wrong adding like")
        }
        else{
          console.log("Like added")
          res.redirect('/')
        }
      })
    }
  }
})()
