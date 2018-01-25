"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrorBuilder_1 = require("./CustomErrorBuilder");
const RequestErrorTypes_1 = require("../../src/app/shared/types/RequestErrorTypes");
class UnauthorizedError extends CustomErrorBuilder_1.CustomErrorBuilder {
    constructor(msg) {
        super(msg, RequestErrorTypes_1.RequestErrorTypes.UNAUTHORIZED);
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map