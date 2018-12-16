var userDetails_1 = require('../repository/userDetails');
var userDetails = new userDetails_1.UserDetails();
function signUp(req, res) {
    var body = req.body;
    return new Promise(function (resolve, reject) {
        userDetails.saveUserDetails(body, function (response) {
            if (response) {
                return res.send({ 'users': response.firstName });
            }
        });
    });
}
exports.signUp = signUp;
