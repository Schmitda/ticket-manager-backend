var mongoose = require('mongoose');
var UserMongooseClass_1 = require("./mongoose-class/UserMongooseClass");
exports.UserMongoose = UserMongooseClass_1.UserMongoose;
var UserExtension_1 = require('./schema-extension/UserExtension');
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
}, {
    usePushEach: true
});
exports.userSchema = userSchema;
UserExtension_1.ExtendUserSchema.userSchema = userSchema;
mongoose.model('User', userSchema);
var UserMongooseModel = mongoose.model('User', userSchema);
exports.UserMongooseModel = UserMongooseModel;
var UserMongooseInstance;
exports.UserMongooseInstance = UserMongooseInstance;
setImmediate(function () {
    UserMongooseInstance = new UserMongooseClass_1.UserMongoose();
    UserMongooseClass_1.UserMongoose.staticModel = UserMongooseModel;
});
//# sourceMappingURL=UserMongoose.js.map