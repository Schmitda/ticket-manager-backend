"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TicketMongooseClass_1 = require("./mongoose-class/TicketMongooseClass");
exports.TicketMongoose = TicketMongooseClass_1.TicketMongoose;
var TicketExtension_1 = require("./schema-extension/TicketExtension");
var ticketSchema = new mongoose.Schema({
    subject: {
        type: String,
        default: null,
    },
    body: {
        type: String,
        default: null,
    },
    created: {
        type: Date,
        default: null,
    },
    urgent: {
        type: Boolean,
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    usePushEach: true
});
exports.ticketSchema = ticketSchema;
TicketExtension_1.ExtendTicketSchema.ticketSchema = ticketSchema;
mongoose.model('Ticket', ticketSchema);
var TicketMongooseModel = mongoose.model('Ticket', ticketSchema);
exports.TicketMongooseModel = TicketMongooseModel;
var TicketMongooseInstance;
exports.TicketMongooseInstance = TicketMongooseInstance;
setImmediate(function () {
    exports.TicketMongooseInstance = TicketMongooseInstance = new TicketMongooseClass_1.TicketMongoose();
    TicketMongooseClass_1.TicketMongoose.staticModel = TicketMongooseModel;
});
//# sourceMappingURL=TicketMongoose.js.map