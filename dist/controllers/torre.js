"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersByStreams = exports.getUserByName = void 0;
const torre_1 = require("../service/torre");
const error_handler_1 = require("../utils/error.handler");
const getUserByName = async ({ params }, res) => {
    try {
        const { name } = params;
        const user = await (0, torre_1.userByNameService)(name);
        res.send(user);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.getUserByName = getUserByName;
const getUsersByStreams = async ({ body }, res) => {
    try {
        const users = await (0, torre_1.usersByStreamsService)(body);
        res.send(users);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.getUsersByStreams = getUsersByStreams;
