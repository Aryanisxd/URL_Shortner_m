import express from "express";

//taking the route info from controller 
import { createShortUrl } from "../controller/shortUrl.controller.js";
const router = express.Router();


//route and controller are connected 
router.post("/", createShortUrl);


export default router;