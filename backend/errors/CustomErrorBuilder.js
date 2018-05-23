"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomErrorBuilder = /** @class */ (function (_super) {
    __extends(CustomErrorBuilder, _super);
    function CustomErrorBuilder(message, type, port) {
        if (port === void 0) { port = 400; }
        var _this = _super.call(this, message) || this;
        _this.errorMessage = message;
        _this.type = type;
        _this.port = port;
        return _this;
    }
    return CustomErrorBuilder;
}(Error));
exports.CustomErrorBuilder = CustomErrorBuilder;
//# sourceMappingURL=CustomErrorBuilder.js.map