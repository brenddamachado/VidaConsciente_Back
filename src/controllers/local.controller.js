const LocalModel = require('../models/local.model');

const getLocations = (req, res) => {
    const locations = LocalModel.getLocations();
    res.json(locations);
};

const addLocation = (req, res) => {
    const { name, address, hours, serviceType } = req.body;
    const newLocation = LocalModel.addLocation({ name, address, hours, serviceType });
    res.status(201).json(newLocation);
};

const updateLocation = (req, res) => {
    const { id } = req.params;
    const updatedLocation = LocalModel.updateLocation(parseInt(id), req.body);
    if (updatedLocation) {
        res.json(updatedLocation);
    } else {
        res.status(404).json({ message: 'Location not found' });
    }
};

const deleteLocation = (req, res) => {
    const { id } = req.params;
    const deleted = LocalModel.deleteLocation(parseInt(id));
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Location not found' });
    }
};

module.exports = {
    getLocations,
    addLocation,
    updateLocation,
    deleteLocation
};