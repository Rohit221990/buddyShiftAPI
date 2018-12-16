var signupModel_1 = require('../models/signupModel');
var UserDetails = (function () {
    function UserDetails() {
    }
    UserDetails.prototype.saveUserDetails = function (user, callback) {
        signupModel_1.userModel.create(user).then(function (res) {
            callback(res);
        });
    };
    return UserDetails;
})();
exports.UserDetails = UserDetails;
