const mongo    = require('mongodb');
const mongoose = require('mongoose');

var NurseSchema = new mongoose.Schema({
    UserName      : String,
    FirstName     : String,
    LastName      : String,
    Password      : String
},
{
    collection    : "Nurse"
});

module.exports = mongoose.model('Nurse', NurseSchema);