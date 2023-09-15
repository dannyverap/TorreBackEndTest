"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByArdaId = exports.getAllFavorites = exports.deleteFavoriteUser = exports.postFavoriteUser = void 0;
const error_handler_1 = require("../utils/error.handler");
const favorites_1 = require("../service/favorites");
const postFavoriteUser = async ({ body }, res) => {
    try {
        const newUser = await (0, favorites_1.postFavoriteUserService)(body);
        res.send(newUser);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.postFavoriteUser = postFavoriteUser;
const getAllFavorites = async (req, res) => {
    try {
        const allUsers = await (0, favorites_1.getAllFavoritesService)();
        res.send(allUsers);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.getAllFavorites = getAllFavorites;
const getUserByArdaId = async ({ params }, res) => {
    try {
        const { ardaId } = params;
        const favoriteUser = await (0, favorites_1.getUserByArdaIdService)(`${ardaId}`);
        res.send(favoriteUser);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.getUserByArdaId = getUserByArdaId;
const deleteFavoriteUser = async ({ params }, res) => {
    try {
        const { ardaId } = params;
        console.log(ardaId);
        const deletedUser = await (0, favorites_1.deleteFavoriteUserService)(`${ardaId}`);
        res.send(deletedUser);
    }
    catch (error) {
        (0, error_handler_1.handleHttP)(res, `${error}`);
    }
};
exports.deleteFavoriteUser = deleteFavoriteUser;
