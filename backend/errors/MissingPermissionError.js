"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
class FileTypeError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(message = 'Sie haben nicht genügend berechtigungen um diese Aktion auszuführen.', type = 'missingPermissionError') {
        super(message, type, 401);
    }
}
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=MissingPermissionError.js.map