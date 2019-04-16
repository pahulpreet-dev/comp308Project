// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'PatientSchema'
const PatientSchema = new Schema({
  
    firstName: String,
    lastName: String,
    patientID: {
        type: String,
        // Set a unique 'patientID' index
        unique: true,
        // Validate 'patientID' value existance
        required: 'patientID is required',
        // Trim the 'patientID' field
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required',
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },
    hospital: String,
    city: String,
    phone: {
        type: Number,
        minlength: 10
    },
    health_data: [{ type: Schema.Types.ObjectId, ref: 'Health' }],
    salt: {
        type: String
    },
    provider: {
        type: String,
        // Validate 'provider' value existance
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    }
});

// Set the 'fullname' virtual property
PatientSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
PatientSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

// Create an instance method for hashing a password
PatientSchema.methods.hashPassword = function (password) {
    //digest parameter required in version 9 of Node.js
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating user
PatientSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Find possible not used username
PatientSchema.statics.findUniquePatientname = function (username, suffix, callback) {
    // Add a 'username' suffix
    const possiblePatientname = username + (suffix || '');

    // Use the 'Patient' model 'findOne' method to find an available unique username
    this.findOne({
        username: possiblePatientname
    }, (err, patient) => {
        // If an error occurs call the callback with a null value, otherwise find find an available unique username
        if (!err) {
            // If an available unique username was found call the callback method, otherwise call the 'findUniquePatientname' method again with a new suffix
            if (!patient) {
                callback(possiblePatientname);
            } else {
                return this.findUniquePatientname(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

// Configure the 'PatientSchema' to use getters and virtuals when transforming to JSON
PatientSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Create the 'Patient' model out of the 'PatientSchema'
mongoose.model('Patient', PatientSchema);