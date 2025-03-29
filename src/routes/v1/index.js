const express = require('express');
const router = express.Router();
const {infoController }= require('../../controllers/index.js')
router.get('/info',infoController.info);

module.exports = router;