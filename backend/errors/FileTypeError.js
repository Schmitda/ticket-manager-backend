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
var FileTypeError = /** @class */ (function (_super) {
    __extends(FileTypeError, _super);
    function FileTypeError(message, type) {
        if (message === void 0) { message = 'Filetype not allowed!'; }
        if (type === void 0) { type = 'fileType'; }
        return _super.call(this, message, type) || this;
    }
    return FileTypeError;
}(CustomErrorBuilder_1.CustomErrorBuilder));
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=FileTypeError.js.map