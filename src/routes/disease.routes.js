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

diseaseRouter.put('/diseases/:id', (req, res) => {
    const diseaseId = req.params.id;
    const updatedData = req.body;
  
    const updatedDisease = updateDisease(diseaseId, updatedData);
    if (updatedDisease === "Esse id não existe no sistema.") {
      return res.status(404).json({ message: 'Doença não encontrada.' });
    }
  
    return res.status(200).json(updatedDisease);
  });

  diseaseRouter.delete('/diseases/:id', (req, res) => {
    const diseaseId = req.params.id;
  
    const deletedMessage = deleteDisease(diseaseId);
    if (deletedMessage === "Esse id não existe no sistema.") {
      return res.status(404).json({ message: 'Doença não encontrada.' });
    }
  
    return res.status(200).json({ message: 'Doença deletada com sucesso.' });
  });
 

export { diseaseRouter }