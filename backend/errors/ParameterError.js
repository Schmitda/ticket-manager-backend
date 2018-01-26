var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomErrorBuilder_1 = require('./CustomErrorBuilder');
var ParameterError = (function (_super) {
    __extends(ParameterError, _super);
    function ParameterError(message, type) {
        if (message === void 0) { message = 'Wrong parameter supplied'; }
        _super.call(this, message, type);
    }
    return ParameterError;
})(CustomErrorBuilder_1.CustomErrorBuilder);
exports.ParameterError = ParameterError;
//# sourceMappingURL=ParameterError.js.map