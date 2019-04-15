const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HealthSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    patientID: {
        type: String,
        default: '',
        trim: true,
        required: 'patientID cannot be blank'
    },
    temparature: {
        type: String,
        trim: true
    },
    heartRate: {
        type: String, default: '',
        trim: true
    },
    bloodPressure: {
        type: String, default: '',
        trim: true
    },
    respiratoryRate: {
        type: String, default: '',
        trim: true
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'Patient'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'Nurse'
    }
});
mongoose.model('Health', HealthSchema);
