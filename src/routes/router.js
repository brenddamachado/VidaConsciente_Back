import { Router } from 'express'
import { createCase, searchAll, deleteCase, updateCase } from "../controllers/casesDST.controller.js";

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

casesRouter.put("/updateCase/:id", (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedCase = updateCase(id, updatedData);
        res.status(200).json({ updatedCase });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

casesRouter.delete("/eraseCase/:id", (req, res)=>{
    const {id} = req.params;
    const deletedCase = deleteCase(id);
    res.status(200).json({deletedCase})
})



export {casesRouter}