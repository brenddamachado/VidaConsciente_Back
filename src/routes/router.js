import { Router } from 'express'
import { searchAll } from "../controllers/casesDST.controller.js";

const casesRouter = Router();

casesRouter.get("/searchAll", (req, res)=>{
    const Allcases = searchAll();
    res.status(200).json({Allcases});
});

export {casesRouter}