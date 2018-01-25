"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const MongooseBase_1 = require("../MongooseBase");
const TicketMongoose_1 = require("../TicketMongoose");
class TicketMongoose extends MongooseBase_1.MongooseBase {
    constructor() {
        super();
        this._model = mongoose.model('Ticket', TicketMongoose_1.ticketSchema);
    }
}
exports.TicketMongoose = TicketMongoose;
//# sourceMappingURL=TicketMongooseClass.js.map