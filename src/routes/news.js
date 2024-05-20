const newsController = require('../app/controller/NewsController')
const express = require('express');
const router = express.Router();


router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;