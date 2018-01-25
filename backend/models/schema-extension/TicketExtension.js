"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ticketSchema.statics.xyz = function
//ticketSchema.methods.xyz = function
//ticketSchema.virtual('fullName').get(function(){})
class ExtendTicketSchema {
    static get ticketSchema() {
        return this._ticketSchema;
    }
    static set ticketSchema(value) {
        this._ticketSchema = value;
    }
}
exports.ExtendTicketSchema = ExtendTicketSchema;
//# sourceMappingURL=TicketExtension.js.map