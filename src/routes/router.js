import { Router } from "express";
import { createDisease, deleteDisease, searchAll, searchName, updateDisease } from "../controllers/DiseasesSTDs.controller.js"


const diseaseRouter = Router();

diseaseRouter.post("/newDisease", (req, res) =>{
    const { name, type, symptoms, transmission, prevention, treatment } = req.body;
    const newDisease = createDisease(name, type, symptoms, transmission, prevention, treatment);
    res.status(201).json({ newDisease });
});

diseaseRouter.get("/searchAll", (req, res) =>{
    const AllDisease = searchAll();
    res.status(200).json({AllDisease});
});

diseaseRouter.get("/searchName/:name", (req, res) =>{
    const { name } = req.params;
    const diseaseName = searchName(name);
    res.status(200).json({diseaseName});
});

diseaseRouter.patch("/updateInfDisease/:id", (req, res) =>{
    const { id } = req.params;
    const informacao = req.body;
    const newInformacao = updateDisease(id, informacao);
    res.status(200).json({ newInformacao });
});

diseaseRouter.delete("/deleteDisease/:id", (req, res) =>{
    const { id } = req.params;
    const diseaseDelete = deleteDisease(id);
    res.status(200).json({ diseaseDelete });
});

export { diseaseRouter }