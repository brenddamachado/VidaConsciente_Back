import express from 'express';
import { getLocation, addLocations, updateLocations, deleteLocations } from '../controllers/local.controller.js';

const local = express.Router();

local.get('/locations', getLocation);
local.post('/locations', addLocations);
local.put('/locations/:id', updateLocations);
local.delete('/locations/:id', deleteLocations);

export default local;
