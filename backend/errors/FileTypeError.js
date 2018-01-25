"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
class FileTypeError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(message = 'Filetype not allowed!', type = 'fileType') {
        super(message, type);
    }
}
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=FileTypeError.js.map