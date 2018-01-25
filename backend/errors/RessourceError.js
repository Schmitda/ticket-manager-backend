"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
class FileTypeError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(message = 'Die geladene Ressource konnte nicht ihnen zugeorndet werden. Versuchen Sie es erneut.', type = 'ressourceAccessError') {
        super(message, type);
    }
}
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=RessourceError.js.map