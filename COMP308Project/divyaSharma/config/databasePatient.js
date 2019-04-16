const mongo    = require('mongodb');
const mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    UserName        : String,
    FirstName       : String,
    LastName        : String,
    BodyTemp        : String,
    HeartRate       : String,
    BloodPrssure    : String,
    RespiratoryRate : String,
    Nurse           : String
},
{
    collection:"patient"
});

module.exports = mongoose.model('patient', PatientSchema);