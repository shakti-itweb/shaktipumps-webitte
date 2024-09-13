const express = require('express');
const router = express.Router();

const pmKususmController = require('../controllers/pmKususmController');
router.get('/pm-kusum', pmKususmController.getPmKususm);
router.get('/pm-kusum/state',pmKususmController.getState);
module.exports = router;