var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    username: {
        type: String,
        required: 'Enter a username'
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    confirmPassword: {
        type: String,
        required: 'Enter a confirm password'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Users'
});
exports.userModel = mongoose_1.model("User", User);
