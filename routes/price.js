
const express = require('express');
const router = express.Router();
const priceController = require('../controller/priceController');

router.get("/price", priceController.getPrice);

module.exports = router;