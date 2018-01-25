var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
abstract;
var CustomErrorBuilder = (function (_super) {
    __extends(CustomErrorBuilder, _super);
    function CustomErrorBuilder(message, type, port) {
        if (port === void 0) { port = 400; }
        _super.call(this, message);
        this.errorMessage = message;
        this.type = type;
        this.port = port;
    }
    return CustomErrorBuilder;
})(Error);
//# sourceMappingURL=CustomErrorBuilder.js.map