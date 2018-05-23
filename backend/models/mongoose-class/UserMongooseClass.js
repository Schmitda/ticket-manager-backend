"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MongooseBase_1 = require("../MongooseBase");
var UserMongoose_1 = require("../UserMongoose");
var UserMongoose = /** @class */ (function (_super) {
    __extends(UserMongoose, _super);
    function UserMongoose() {
        var _this = _super.call(this) || this;
        _this._model = mongoose.model('User', UserMongoose_1.userSchema);
        return _this;
    }
    return UserMongoose;
}(MongooseBase_1.MongooseBase));
exports.UserMongoose = UserMongoose;
//# sourceMappingURL=UserMongooseClass.js.map