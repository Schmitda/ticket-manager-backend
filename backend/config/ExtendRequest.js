var UserMongoose_1 = require('../models/UserMongoose');
var extendRequest = function extendRequest(req, res, next) {
    req.getUser = function () {
        return new Promise(function (resolve, reject) {
            if (req.decoded) {
                UserMongoose_1.UserMongooseModel.findById(req.decoded.user._id).populate(UserMongoose_1.UserMongoose.defaultPopulate).exec(function (err, user) {
                    if (err) {
                        reject(err);
                    }
                    if (user) {
                        resolve(user);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                resolve(null);
            }
        });
    };
    next();
};
exports.extendRequest = extendRequest;
//# sourceMappingURL=ExtendRequest.js.map