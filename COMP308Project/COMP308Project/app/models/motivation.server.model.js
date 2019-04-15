const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MotivationSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
   
    Title: {
        type: String,
        trim: true
    },
    Quote: {
        type: String, default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'Nurse'
    }
});
mongoose.model('Motivation', MotivationSchema);
