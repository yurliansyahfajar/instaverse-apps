 //Import router module
import { Router } from "express";
import {login, signup } from "../controllers/users.js";

//use route module
const router = Router();

//set root reponse
router.post('/login', login);
router.post('/signup', signup);

export default router;
