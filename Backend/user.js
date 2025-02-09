const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },  
    email: { type: String, required: true, unique: true },  
    dob: { type: Number, required: true },  
    gender: { type: String },  
    username: { type: String, required: true, unique: true },  
    password: { type: String, required: true },  
    role: { type: String, enum: ['admin', 'user'], default: 'user', required: true }  // ✅ Added Role Field
});
const User = mongoose.model('User', userSchema);
module.exports = User;


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     fullname: { type: String, required: true },  
//     email: { type: String, required: true, unique: true },  
//     dob: { type: Number, required: true },  
//     gender: { type: String },  
//     username: { type: String, required: true, unique: true },  
//     password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;

