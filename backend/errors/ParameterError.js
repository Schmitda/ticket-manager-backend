"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
class ParameterError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(message = 'Wrong parameter supplied', type) {
        super(message, type);
    }
}
exports.ParameterError = ParameterError;
//# sourceMappingURL=ParameterError.js.map