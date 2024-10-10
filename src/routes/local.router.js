import express from 'express';
import { getLocation, addLocations, updateLocations, deleteLocations } from '../controllers/local.controller.js';

const router = express.Router();

router.get('/locations', getLocation);
router.post('/locations', addLocations);
router.put('/locations/:id', updateLocations);
router.delete('/locations/:id', deleteLocations);

export default router;
