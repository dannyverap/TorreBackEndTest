import { Router } from "express";
import { postFavoriteUser, deleteFavoriteUser, getAllFavorites, getUserByArdaId } from "../controllers/favorites";

const router = Router();

router.post("/", postFavoriteUser);
router.get("/", getAllFavorites)
router.get("/:ardaId", getUserByArdaId)
router.delete("/:ardaId", deleteFavoriteUser);

export { router };
