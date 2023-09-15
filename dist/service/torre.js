"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersByStreamsService = exports.userByNameService = void 0;
const axios_1 = __importDefault(require("axios"));
const userByNameService = async (name) => {
    const torreResponse = await axios_1.default.get(`https://torre.bio/api/bios/${name}`);
    const user = torreResponse.data;
    if (!user)
        throw new Error("User not found");
    return user;
};
exports.userByNameService = userByNameService;
const usersByStreamsService = async ({ query, limit }) => {
    const torreResponse = await axios_1.default.post("https://torre.ai/api/entities/_searchStream", { query, limit });
    const { data } = torreResponse;
    if (!data)
        throw new Error("Users not found");
    const cleanData = data.split("\n").filter((line) => line.trim() !== "");
    const users = cleanData.map((element) => JSON.parse(element));
    return users;
};
exports.usersByStreamsService = usersByStreamsService;
