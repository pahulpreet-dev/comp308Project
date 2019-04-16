var mongoose       = require('mongoose');
var monNurse       = require('../../config/databaseNurse.js');
var monPatient     = require('../../config/databasePatient.js');
module.exports = function(option){
    var seneca = this;
    seneca.add({ role: 'CRUD', cmd: 'createNurse' }, createNurseData);

// -------------------- CREATE NURSE ---------------------

    function createNurseData(msg, respond){
        let newCust = monNurse({
            "UserName"      : msg.UserName,
            "FirstName"     : msg.fName,
            "LastName"      : msg.lName,
            "Password"      : msg.password
        })

        monNurse.create(newCust, (err, next) => {
          if(err){
              console.log(err);
              respond(null, {answer:"Failed"});
          }else{
              console.log("Sucess");
              respond(null, {answer:"Sucess"});
            }
        })

    }

// ------------------------- CREATE PATIENT ---------------------
    seneca.add({ role: 'CRUD', cmd: 'createPatient' }, createPatientData);

    function createPatientData(msg, respond){

        let newCust = monPatient({
            "UserName"        : msg.UserName,
            "FirstName"       : msg.fName,
            "LastName"        : msg.lName,
            "Nurse"           : msg.nurse
        })
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>. " + newCust);

        monPatient.create(newCust, (err, next) => {
          if(err){
              console.log(err);
              respond(null, {answer:"Failed"});
          }else{
              console.log("Sucess");
              respond(null, {answer:"Sucess"});
            }
        })

    }


}