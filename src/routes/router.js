import { Router } from "express";
import { createDisease, searchAll } from "../controllers/DiseasesSTDs.controller.js";


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

export { diseaseRouter }