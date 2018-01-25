"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const MongooseBase_1 = require("../MongooseBase");
const UserMongoose_1 = require("../UserMongoose");
class UserMongoose extends MongooseBase_1.MongooseBase {
    constructor() {
        super();
        this._model = mongoose.model('User', UserMongoose_1.userSchema);
    }
}
exports.UserMongoose = UserMongoose;
//# sourceMappingURL=UserMongooseClass.js.map