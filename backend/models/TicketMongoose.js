"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TicketMongooseClass_1 = require("./mongoose-class/TicketMongooseClass");
exports.TicketMongoose = TicketMongooseClass_1.TicketMongoose;
const TicketExtension_1 = require("./schema-extension/TicketExtension");
const ticketSchema = new mongoose.Schema({
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
}, {
    usePushEach: true
});
exports.ticketSchema = ticketSchema;
TicketExtension_1.ExtendTicketSchema.ticketSchema = ticketSchema;
mongoose.model('Ticket', ticketSchema);
let TicketMongooseModel = mongoose.model('Ticket', ticketSchema);
exports.TicketMongooseModel = TicketMongooseModel;
let TicketMongooseInstance;
exports.TicketMongooseInstance = TicketMongooseInstance;
setImmediate(() => {
    exports.TicketMongooseInstance = TicketMongooseInstance = new TicketMongooseClass_1.TicketMongoose();
    TicketMongooseClass_1.TicketMongoose.staticModel = TicketMongooseModel;
});
//# sourceMappingURL=TicketMongoose.js.map