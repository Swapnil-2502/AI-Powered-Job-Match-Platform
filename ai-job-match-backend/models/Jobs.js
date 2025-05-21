const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: String,
    company: String,
    location: String,
    skills: [String],
})

module.exports = mongoose.model('Jobs', jobSchema)