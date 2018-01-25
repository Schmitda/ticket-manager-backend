"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserMongooseClass_1 = require("./mongoose-class/UserMongooseClass");
exports.UserMongoose = UserMongooseClass_1.UserMongoose;
const UserExtension_1 = require("./schema-extension/UserExtension");
const userSchema = new mongoose.Schema({
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
let UserMongooseModel = mongoose.model('User', userSchema);
exports.UserMongooseModel = UserMongooseModel;
let UserMongooseInstance;
exports.UserMongooseInstance = UserMongooseInstance;
setImmediate(() => {
    exports.UserMongooseInstance = UserMongooseInstance = new UserMongooseClass_1.UserMongoose();
    UserMongooseClass_1.UserMongoose.staticModel = UserMongooseModel;
});
//# sourceMappingURL=UserMongoose.js.map