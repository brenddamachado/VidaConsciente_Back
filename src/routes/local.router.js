const express = require('express');
const router = express.Router();
const LocalController = require('../controllers/local.controller');

router.get('/', LocalController.getLocations);
router.post('/', LocalController.addLocation);
router.put('/:id', LocalController.updateLocation);
router.delete('/:id', LocalController.deleteLocation);

module.exports = router;