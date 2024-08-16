import express from "express"
import {index} from "../controllers/roast-controller.js";
const router = express.Router();
router.get('/roast',index);
export default router;