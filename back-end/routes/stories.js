//Import router module
import { Router } from "express";
import { getStories, createStories, updateStories, deleteStories, likeStories} from "../controllers/storiesController.js";

//use route module
const router = Router();

//set root reponse
router.get("/", getStories);
router.post("/", createStories);
router.patch("/:id", updateStories);
router.delete("/:id", deleteStories);
router.patch("/:id/likeStories", likeStories);

export default router;
