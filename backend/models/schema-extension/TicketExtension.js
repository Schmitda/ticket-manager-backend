"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ticketSchema.statics.xyz = function
//ticketSchema.methods.xyz = function
//ticketSchema.virtual('fullName').get(function(){})
var ExtendTicketSchema = /** @class */ (function () {
    function ExtendTicketSchema() {
    }
    Object.defineProperty(ExtendTicketSchema, "ticketSchema", {
        get: function () {
            return this._ticketSchema;
        },
        set: function (value) {
            this._ticketSchema = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExtendTicketSchema;
}());
exports.ExtendTicketSchema = ExtendTicketSchema;
//# sourceMappingURL=TicketExtension.js.map