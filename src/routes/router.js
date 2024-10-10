import { Router } from 'express'
import { createCase, searchAll, deleteCase } from "../controllers/casesDST.controller.js";

const casesRouter = Router();

casesRouter.post("/newCase", (req, res)=>{
    const {name, casesByYear } = req.body;
    const newCase = createCase(name, casesByYear);
    res.status(201).json({newCase});
})

casesRouter.get("/searchAll", (req, res)=>{
    const Allcases = searchAll();
    res.status(200).json({Allcases});
});

casesRouter.delete("/eraseCase/:id", (req, res)=>{
    const {id} = req.params;
    const deletedCase = deleteCase(id);
    res.status(200).json({deletedCase})
})



export {casesRouter}