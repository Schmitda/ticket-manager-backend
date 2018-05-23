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
var CustomErrorBuilder_1 = require("./CustomErrorBuilder");
var RequestErrorTypes_1 = require("../../src/app/shared/types/RequestErrorTypes");
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(msg) {
        return _super.call(this, msg, RequestErrorTypes_1.RequestErrorTypes.UNAUTHORIZED) || this;
    }
    return UnauthorizedError;
}(CustomErrorBuilder_1.CustomErrorBuilder));
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map