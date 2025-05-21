const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    name: String,
    location: String,
    experience: Number,
    skills: [String],
    jobType: {
        type: String,
        enum: ['remote', 'onsite', 'any'],
        default: 'any',
    },
})

module.exports = mongoose.model('Profile', profileSchema);