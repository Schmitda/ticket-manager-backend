var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomErrorBuilder_1 = require('./CustomErrorBuilder');
var FileTypeError = (function (_super) {
    __extends(FileTypeError, _super);
    function FileTypeError(message, type) {
        if (message === void 0) { message = 'Die geladene Ressource konnte nicht ihnen zugeorndet werden. Versuchen Sie es erneut.'; }
        if (type === void 0) { type = 'ressourceAccessError'; }
        _super.call(this, message, type);
    }
    return FileTypeError;
})(CustomErrorBuilder_1.CustomErrorBuilder);
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=RessourceError.js.map