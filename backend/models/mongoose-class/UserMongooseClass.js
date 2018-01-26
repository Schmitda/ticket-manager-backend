var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mongoose = require('mongoose');
var MongooseBase_1 = require("../MongooseBase");
var UserMongoose_1 = require("../UserMongoose");
var UserMongoose = (function (_super) {
    __extends(UserMongoose, _super);
    function UserMongoose() {
        _super.call(this);
        this._model = mongoose.model('User', UserMongoose_1.userSchema);
    }
    return UserMongoose;
})(MongooseBase_1.MongooseBase);
exports.UserMongoose = UserMongoose;
//# sourceMappingURL=UserMongooseClass.js.map