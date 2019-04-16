const Nurse = require('mongoose').model('Nurse');
const Patient = require('mongoose').model('Patient');
const Motivation = require('mongoose').model('Motivation');
const HealthData = require('mongoose').model('Health');

// Create a new error handling controller method
const getErrorMessage = function (err) {
    // Define the error message variable
    let message = '';

    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    // Return the message error
    return message;
};

//Method to crease new Patient user
exports.signup = function (req, res) {
    const patient = new Patient(req.body);
    patient.provider = 'local';

    // Try saving the User
    patient.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            patient.password = undefined;
            patient.salt = undefined;
            res.status(200).json(patient);
            // Login the user
            req.login(patient, function (err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(patient);
                }
            });
        }
    });
}

//uses the Passport-initiated req.
//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};

//Method to list quotes
exports.listQuotes = function (req, res) {
    Motivation.find().exec((err, quotes) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(quotes);
        }
    });
};
/*
//method to read Health data of a patient
exports.readHealthData = function (req, res, next, id) {
    Patient.findById(id).populate('health_data').exec((err, patient) => {
        if (err) return next(err);
        if (!patient) return next(new Error('Failed to load healthDatas '
            + id));
        req.patient = patient;
        next();
    });
};*/

//Method to create Health data record
exports.createHealthData = function (req, res) {
    const healthdata = new HealthData(req.body);
    healthdata.creator = req.user;
    Patient.findOne({ 'patientID': healthdata.patientID }, function (err, patient) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            healthdata.patient = patient._id;

            patient.save(function (error) {
                if (!error) {
                    Patient.findOne({ 'patientID': healthdata.patientID })
                        .populate('healthdatas')
                        .exec(function (error, patients) {
                            console.log(JSON.stringify(patients, null, "\t"))
                        })
                }
            });
            healthdata.save((err) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {

                    res.status(200).json(healthdata);
                }
            });
        }

    });

};

// Method to get list of values from selected checkboxes
onclick = 'buildlist("YourCheckBoxName","SelectedValues");'
exports.retrieveQuotes = function (req, res) {
    req.body.SelectedValues;
    var controls = document.getElementsByName(listName);
    var label = document.getElementsByName(labelName);
    label.value = '';
    for (var i = 0; i < controls.length; i++) {
        res.value += controls[i].value.toString() + ',';
    }
};


// Method to run motivational video
// Route for getting all the files
app.get('/files', (req, res) => {
    let filesData = [];
    let count = 0;
    gfs.collection('ctFiles'); // set the collection to look up into

    gfs.files.find({}).toArray((err, files) => {
        // Error checking
        if (!files || files.length === 0) {
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        files.forEach((file) => {
            filesData[count++] = {
                originalname: file.metadata.originalname,
                filename: file.filename,
                contentType: file.contentType
            }
        });
        res.json(filesData);
    });
});


// Downloading a single file
app.get('/file/:filename', (req, res) => {
    gfs.collection('ctFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {
        if (!files || files.length === 0) {
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "ctFiles"
        });
        // set the proper content type 
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
    });
});