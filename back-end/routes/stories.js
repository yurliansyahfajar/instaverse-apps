//Import router module
import { Router } from "express";
import { getStories, createStories} from "../controllers/storiesController.js";

//use route module
const router = Router();

//set root reponse
router.get("/", getStories);
router.post("/", createStories);

export default router;
