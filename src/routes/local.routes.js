
import express from 'express';
import { getLocation, addLocations, updateLocations, deleteLocations } from '../controllers/local.controller.js';

const localRouter = express.Router();

localRouter.get('/', getLocation);
localRouter.post('/', addLocations);
localRouter.put('/:id', updateLocations);
localRouter.delete('/:id', deleteLocations);

export default localRouter;
