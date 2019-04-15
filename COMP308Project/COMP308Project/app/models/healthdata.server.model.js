const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
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
    creator: {
        type: Schema.ObjectId,
        ref: 'Nurse'
    }
});
mongoose.model('Course', CourseSchema);
