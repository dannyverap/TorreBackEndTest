"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByArdaIdService = exports.getAllFavoritesService = exports.deleteFavoriteUserService = exports.postFavoriteUserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const postFavoriteUserService = async ({ ardaId, username, name, imageUrl, professionalHeadline, }) => {
    const userInDB = await user_1.default.findOne({ ardaId });
    if (userInDB)
        return;
    const newFavoriteUser = await user_1.default.create({
        ardaId,
        username,
        name,
        imageUrl,
        professionalHeadline,
    });
    return newFavoriteUser;
};
exports.postFavoriteUserService = postFavoriteUserService;
const getAllFavoritesService = async () => {
    const allUsers = await user_1.default.find();
    return allUsers;
};
exports.getAllFavoritesService = getAllFavoritesService;
const getUserByArdaIdService = async (ardaId) => {
    const user = await user_1.default.findOne({ ardaId });
    if (!user) {
        throw new Error("user not found");
    }
    return user.ardaId;
};
exports.getUserByArdaIdService = getUserByArdaIdService;
const deleteFavoriteUserService = async (ardaId) => {
    const user = await user_1.default.findOneAndDelete({ ardaId });
    if (!user) {
        throw new Error("user not found");
    }
    return `${user?.name} Deleted from favorites`;
};
exports.deleteFavoriteUserService = deleteFavoriteUserService;
