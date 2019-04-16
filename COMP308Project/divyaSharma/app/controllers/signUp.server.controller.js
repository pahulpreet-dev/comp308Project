exports.render = function (req, res) {
   console.log(">>>> " + req.body.signUp);
  
    var user = req.body.signUp;

    if(user == "SignUpNurse"){
        res.render('./signUpNurse', {"Error" : ""});
    }else if(user == "SignUpPatient"){

        var seneca = require('seneca')();
        seneca.use('../micro/readMicro');
        
        seneca.act({role:'CRUD', cmd:'getNurse'}, function(err, result){
            if(result['answer'] == "Sucess"){
                console.log("Sucess Got Nurse Data .... ");
                if(result["docs"].length <= 0){
                    res.render('./index', {"Error":"NO NURSE IS CURRENTLY AVAILABLE PLEASE WAIT FOR NURSE TO REGESTER"});
                }else{
                    res.render('./signUpPatient', {"Error":"", docs:result["docs"]});
                }
                
            }
            else{
                console.log("Failed to get Nurse Data .... ");
            }
        })

        
    }else{

    }
};