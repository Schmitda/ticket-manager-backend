"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomErrorBuilder extends Error {
    constructor(message, type, port = 400) {
        super(message);
        this.errorMessage = message;
        this.type = type;
        this.port = port;
    }
}
exports.CustomErrorBuilder = CustomErrorBuilder;
//# sourceMappingURL=CustomErrorBuilder.js.map