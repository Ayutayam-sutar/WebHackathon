// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    userType: String, // 'admin', 'faculty', 'student'
});

module.exports = mongoose.model('User', UserSchema);
