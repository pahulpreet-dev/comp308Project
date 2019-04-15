const nurse = require('../../app/controllers/nurse.server.controller');

module.exports = function (app) {
    
    app.get('/patients', nurse.list); //lists all patients
    app.post('/nurseSignUp', nurse.signup); //creates new nurse user and logs in
    app.get('/nurse/:patientID', nurse.readHealthData)  //view patient health data
    app.post('/nurse/:patientID', nurse.createHealthData)   //creates new patient health data
   // app.put('/nurse/:patientID', nurse.updateHealthData)   //update patient health data
    //app.delete('/nurse/:patientID', nurse.deleteHealthData); //deletes patient health data
    /* app.route('/nurses')
       // .get(nurse.list)    //lists all patients
        .post(nurse.signup);   //creates new nurse user and logs in
   app.route('/nurses/:patientID')
       // .get(nurse.readHealthdata)  //view patient health data
        .post(users.requiresLogin, nurse.createHealthData)   //creates new patient health data
        .put(users.requiresLogin, nurse.updateHealthData)   //update patient health data
        .delete(users.requiresLogin, nurse.deleteHealthData); //deletes patient health data

    app.route('/nurses/motivation')
       // .get(nurse.listQuotes)
        .post(nurse.createQuote); */
};
