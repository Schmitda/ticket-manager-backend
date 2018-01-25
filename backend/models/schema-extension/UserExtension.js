//userSchema.statics.xyz = function
//userSchema.methods.xyz = function
//userSchema.virtual('fullName').get(function(){})
var ExtendUserSchema = (function () {
    function ExtendUserSchema() {
    }
    Object.defineProperty(ExtendUserSchema, "userSchema", {
        get: function () {
            return this._userSchema;
        },
        set: function (value) {
            this._userSchema = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExtendUserSchema;
})();
exports.ExtendUserSchema = ExtendUserSchema;
//# sourceMappingURL=UserExtension.js.map