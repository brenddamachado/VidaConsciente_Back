import { getLocations, addLocation, updateLocation, deleteLocation } from '../models/local.model.js';

export const getLocation = (req, res) => {
    const locations = getLocations();
    res.json(locations);
};

export const addLocations = (req, res) => {
    const { name, address, hours, serviceType, latitude, longitude } = req.body; 
    const newLocation = addLocation({ name, address, hours, serviceType, latitude, longitude }); 
    res.status(201).json(newLocation);
};

export const updateLocations = (req, res) => {
    const { id } = req.params;
    const updatedLocation = updateLocation(parseInt(id), req.body);
    if (updatedLocation) {
        res.json(updatedLocation);
    } else {
        res.status(400).json({ message: 'Local não encontrado' });
    }
};

export const deleteLocations = (req, res) => {
    const { id } = req.params;
    const deleted = deleteLocation(parseInt(id));
    if (deleted) {
        res.status(200).json({ message: 'Local deletado com sucesso!' });
    } else {
        res.status(400).json({ message: 'Não foi possível encontrar o local' });
    }
};
