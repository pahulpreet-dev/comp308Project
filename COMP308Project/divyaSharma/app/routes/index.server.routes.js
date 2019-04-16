module.exports = function (app) {
    
    var index      = require('../controllers/index.server.controller');
    var signUp     = require('../controllers/signUp.server.controller');
    var mongoose   = require('mongoose');
    var create     = require('../controllers/createUser.server.controller');
    var nurse      = require('../../config/databaseNurse');
    var patient    = require('../../config/databasePatient');
    var signIn     = require('../controllers/signIn.server.controller');

    app.get('/', index.render);
    app.post('/', function (req, res) {
        console.log(req.body);
        index.render(req, res);
    });
    
    app.get('/checkNurse', function(req, res){
        nurse.find({})
         .exec(function(err, result){
             if(err){
                console.log(err);
             }else{
                console.log(result);
                res.json(result);
             }
         })
    });

    app.get('/checkPatient', function(req, res){
        patient.find({})
         .exec(function(err, result){
             if(err){
                console.log(err);
             }else{
                console.log(result);
                res.json(result);
             }
         })
    });

    app.post('/signUpNurse', function(req, res){
        console.log("nurse signup");
        console.log(req.body);
        signUp.render(req, res);
    });

    app.post('/signUpPatient', function(req, res){
        console.log("patient signup");
        console.log(req.body);
        signUp.render(req, res);
    });

    app.post('/createUser', function(req, res){
        console.log("Create User");
        console.log(req.body);
        create.render(req, res);
    });

    app.post('/signInPatient', function(req, res){
        console.log("Sign In Patient");
        console.log(req.body);
        signIn.render(req, res);
    });

    app.post('/signInNurse', function(req, res){
        console.log("Sign In Nurse");
        console.log(req.body);
        signIn.render(req, res);
    });

};