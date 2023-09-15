import { Request, Response, response } from "express";
import { handleHttP } from "../utils/error.handler";
import {
  postFavoriteUserService,
  deleteFavoriteUserService,
  getAllFavoritesService,
  getUserByArdaIdService
} from "../service/favorites";

const postFavoriteUser = async ({ body }: Request, res: Response) => {
  try {
    const newUser = await postFavoriteUserService(body);
    res.send(newUser);
  } catch (error) {
    handleHttP(res, `${error}`);
  }
};

const getAllFavorites = async (req: Request, res: Response) => {
    try {
      const allUsers = await getAllFavoritesService();
      res.send(allUsers );
    } catch (error) {
      handleHttP(res, `${error}`);
    }
  };

  const getUserByArdaId = async ({params}: Request, res: Response) => {
    try {
      const { ardaId } = params;
      const favoriteUser = await getUserByArdaIdService(`${ardaId}`);
      res.send(favoriteUser);
    } catch (error) {
      handleHttP(res, `${error}`);
    }
  };

const deleteFavoriteUser = async ({ params }: Request, res: Response) => {
  try {
    const { ardaId } = params;
    console.log(ardaId);
    
    const deletedUser = await deleteFavoriteUserService(`${ardaId}`);
    res.send(deletedUser);
  } catch (error) {
    handleHttP(res, `${error}`);
  }
};

export { postFavoriteUser, deleteFavoriteUser , getAllFavorites,getUserByArdaId};
