"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//userSchema.statics.xyz = function
//userSchema.methods.xyz = function
//userSchema.virtual('fullName').get(function(){})
class ExtendUserSchema {
    static get userSchema() {
        return this._userSchema;
    }
    static set userSchema(value) {
        this._userSchema = value;
    }
}
exports.ExtendUserSchema = ExtendUserSchema;
//# sourceMappingURL=UserExtension.js.map