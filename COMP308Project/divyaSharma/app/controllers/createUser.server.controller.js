exports.render   = function (req, res) {
    var userName = req.body.username;
    var fName    = req.body.fName;
    var lName    = req.body.lName;
    var password = req.body.password;
    var user     = req.body.create;
    var nurse    = req.body.nurseAlloted;
    console.log(req.body);

    if(user == "CreateUserNurse"){
    
        var seneca = require('seneca')();
        seneca.use('../micro/createMicro');
        
        seneca.act({role:'CRUD', cmd:'createNurse', UserName:userName, fName:fName, lName:lName, password:password}, function(err, result){
            if(result['answer'] == "Sucess"){
                res.render('index', {"Error" : "NURSE DATA CREATED"});
                console.log("Sucess Nurse Data Created .... ");
            }
            else{
                console.log("Failed Nurse Data Failed  .... ");
                res.render('signUpNurse', {"Error" : "Some Error"})
            }
        })
        
    
    }else if(user == "CreateUserPatient"){
        var seneca = require('seneca')();
        seneca.use('../micro/createMicro');
        
        seneca.act({role:'CRUD', cmd:'createPatient', UserName:userName, fName:fName, lName:lName, nurse}, function(err, result){
            if(result['answer'] == "Sucess"){
                res.render('index', {"Error" : "NURSE DATA CREATED"});
                console.log("Sucess Patient Data Created .... ");
            }
            else{
                console.log("Failed Patient Data Failed  .... ");
                res.render('signUpPatient', {"Error" : "Some Error"})
            }
        })


    }else{

    }
}