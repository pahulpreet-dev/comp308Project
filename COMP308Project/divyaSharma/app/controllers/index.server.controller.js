exports.render = function (req, res) {
    var username = req.body.username; 
    var password = req.body.password;
    var session = req.session;
    var mongoose = require('mongoose');
   
    if (username != null) {
    }
    else{
      res.render('index', {"Error":""});
    }
};