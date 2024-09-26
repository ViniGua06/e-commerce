"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const BadRequest_error_1 = require("../Errors/BadRequest.error");
const ErrorHandler = (error, req, res, next) => {
    if (error instanceof BadRequest_error_1.BadRequestError) {
        return res.status(400).json({ message: error.message });
    }
    else {
        return res
            .status(500)
            .json({ message: "Internal server error - " + error.message });
    }
};
exports.ErrorHandler = ErrorHandler;
