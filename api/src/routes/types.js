const Router = require('express');
const router = Router();
const typesController = require('../controllers/types.controller');

router.get('/', typesController);


module.exports = router;