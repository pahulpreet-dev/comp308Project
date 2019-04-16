exports.render = function (req, res) {
    console.log(">>>> " + req.body.signUp);
    var userName = req.body.username;
    var password = req.body.password;
    var user     = req.body.signIn;

    if(user == "SignInNurse"){
      console.log("-----------------------------------");
      var seneca = require('seneca')();
      seneca.use('../micro/readMicro');

      seneca.act({role:'CRUD', cmd:'authNurse', userName:userName, password:password}, function(err, result){
        if(result['answer'] == "Sucess"){
            console.log("SUCESS");
          
          
        }else{
          console.log(result);
          res.render("index", {"Error":"Record Not Exist"})
        }
      })

    }else if(user == "SignInPatient"){
      console.log("-----------------------------------");
      var seneca = require('seneca')();
      seneca.use('../micro/readMicro');

      seneca.act({role:'CRUD', cmd:'authPatient', userName:userName}, function(err, result){
        if(result['answer'] == "Sucess"){
            console.log("SUCESS");
        }else{
          console.log(result);
          res.render("index", {"Error":"Record Not Exist"})
        }
      })

    }else{

    }

 };