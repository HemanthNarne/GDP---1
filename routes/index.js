var express = require('express');
var router = express.Router();
var myuser = require('../model/mymodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/saveUser', function(req, res, next) {
  if(req && !req.body){
    return res.status(405).json({msg: "kindly make sure you provide crct input"})
  }
  var userObj = new myuser(req.body)

  userObj.save(function(err, data){
    if(err){
      res.status(405).json({msg: "There is something wrong"})
    }
    else{
      res.status(200).json({msg: "the record of the user has saved sucessfully"})
    }
    
  })
});


router.get('/getUser', function(req, res, next) {
  myuser.find({}, function(err, data) {
    if(err){
      res.status(405).json({msg: "There is something wrong"})
    } else {
      res.status(200).json({msg: "the record of the user has saved sucessfully", data: data})
    }
  }
  )
});


module.exports = router;

