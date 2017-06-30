var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  id = req.query.id;

  if (id > 0 ) {

    fs.readFile('/Users/grekman/StudyContinue/Day_0630/tailsexpress/tails/public/json/'+id+'.json','UTF-8', function( err,data){
      data = JSON.parse(data);
      res.render('tales', {title : data.title, img : data.img, text : data.text})
    })

  } else{
    res.render('tales')
  }

});

module.exports = router;
