"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
class FileTypeError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(message = 'Für diese Aktion müssen sie angemeldet sein.', type = 'needAuthentication') {
        super(message, type, 401);
    }
}
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=NeedAuthenticationError.js.map