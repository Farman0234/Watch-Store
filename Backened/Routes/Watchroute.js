const express = require('express');
const router = express.Router();

const WatchController = require('../App/Apis/Controller/WatchController');

router.get('/', WatchController.getWatch);

module.exports = router;
