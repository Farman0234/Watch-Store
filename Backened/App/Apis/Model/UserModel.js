const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltround = 10;

mongoose.pluralize(null);

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: String ,
    resetPasswordExpires:  Date
});

userSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = bcrypt.hashSync(this.password, saltround);
    }
    next();
});

var UsersModel = mongoose.model('Users', userSchema);
module.exports = UsersModel;



































// const mongoose = require('mongoose');
// mongoose.pluralize(null);

// const bcrypt = require('bcrypt');
// const saltround = 10;


// var Schema = mongoose.Schema;
// var userSchema = new Schema({
//     name: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });


// userSchema.pre('save', function (next) {
//     this.password = bcrypt.hashSync(this.password, saltround);
//     next();
// });


// var UsersModel = mongoose.model('Users', userSchema);
// module.exports = UsersModel;