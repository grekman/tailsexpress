var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  id = req.query.id;



    fs.readFile('/Users/grekman/StudyContinue/Day_0630/tailsexpress/tails/public/json/total.json','UTF-8', function( err,data){
      data = JSON.parse(data);

      if(id) {
        data.map(item => {

          if(item.id == id) res.render('tales', {title : item.title, img : item.img, text : item.text});
        })
      } else {
        res.render('tales', {data: data})
      }
    })



});

module.exports = router;
