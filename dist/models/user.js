"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    ardaId: {
        type: String,
        unique: true,
        required: true,
    },
    username: { type: String },
    name: { type: String },
    imageUrl: { type: String },
    professionalHeadline: {},
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
