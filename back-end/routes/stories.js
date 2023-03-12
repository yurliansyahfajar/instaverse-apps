//Import router module
import { Router } from "express";
import { getStories, createStories, updateStories, deleteStories, likeStories} from "../controllers/storiesController.js";
import authentication from '../middleware/authentication.js';
//use route module
const router = Router();

//set root reponse
router.get("/", getStories);
router.post("/", authentication, createStories);
router.patch("/:id", authentication, updateStories);
router.delete("/:id", authentication, deleteStories);
router.patch("/:id/likeStories", authentication, likeStories);

export default router;
