var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mongoose = require('mongoose');
var MongooseBase_1 = require("../MongooseBase");
var TicketMongoose_1 = require("../TicketMongoose");
var TicketMongoose = (function (_super) {
    __extends(TicketMongoose, _super);
    function TicketMongoose() {
        _super.call(this);
        this._model = mongoose.model('Ticket', TicketMongoose_1.ticketSchema);
    }
    return TicketMongoose;
})(MongooseBase_1.MongooseBase);
exports.TicketMongoose = TicketMongoose;
//# sourceMappingURL=TicketMongooseClass.js.map