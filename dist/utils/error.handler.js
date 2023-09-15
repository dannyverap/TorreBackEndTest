"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttP = void 0;
const handleHttP = (res, error, errorRaw) => {
    res.status(404).send(error);
};
exports.handleHttP = handleHttP;
