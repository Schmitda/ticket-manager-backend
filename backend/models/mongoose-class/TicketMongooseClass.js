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
var TicketMongoose_1 = require("../TicketMongoose");
var TicketMongoose = /** @class */ (function (_super) {
    __extends(TicketMongoose, _super);
    function TicketMongoose() {
        var _this = _super.call(this) || this;
        _this._model = mongoose.model('Ticket', TicketMongoose_1.ticketSchema);
        return _this;
    }
    return TicketMongoose;
}(MongooseBase_1.MongooseBase));
exports.TicketMongoose = TicketMongoose;
//# sourceMappingURL=TicketMongooseClass.js.map