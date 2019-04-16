var mongoose       = require('mongoose');
var monNurse       = require('../../config/databaseNurse.js');
var monPatient     = require('../../config/databasePatient.js');

module.exports = function(option){
    var seneca = this;
    seneca.add({ role: 'CRUD', cmd: 'getNurse' }, getNurseData);

    function getNurseData(msg, respond){
        monNurse.find({})
         .exec(function(err, result){
             if(err){
                respond(null, {answer:"Failed",});
             }else{
                respond(null, {answer:"Sucess", docs:result});
             }
         })       
    }
// ------------------- AUTHENTICATE NURSE --------------------
    seneca.add({ role: 'CRUD', cmd: 'authNurse' }, authenticateNurse);

    function authenticateNurse(msg, respond){
        monNurse.find(
            { UserName : msg.userName, Password : msg.password }, 
            function(err,docs) { 
                console.log(docs);
                if(docs.length <= 0){
                    respond(null, {answer:"Failed"});
                }
                else{
                    respond(null, {answer:"Sucess", docs:docs});
                }
                
            }
        );
    }


// ------------------- AUTHENTICATE PATIENT --------------------
seneca.add({ role: 'CRUD', cmd: 'authPatient' }, authenticatePatient);

function authenticatePatient(msg, respond){
    monPatient.find(
        { UserName : msg.userName}, 
        function(err,docs) { 
            console.log(docs);
            if(docs.length <= 0){
                respond(null, {answer:"Failed"});
            }
            else{
                respond(null, {answer:"Sucess", docs:docs});
            }
            
        }
    );
}


}