var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomErrorBuilder_1 = require('./CustomErrorBuilder');
var RequestErrorTypes_1 = require('../../src/app/shared/types/RequestErrorTypes');
var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(msg) {
        _super.call(this, msg, RequestErrorTypes_1.RequestErrorTypes.UNAUTHORIZED);
    }
    return UnauthorizedError;
})(CustomErrorBuilder_1.CustomErrorBuilder);
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map