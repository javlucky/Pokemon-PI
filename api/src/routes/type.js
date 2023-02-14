const Router = require('express');
const router = Router();
const typeController = require('../controllers/type.controller');

router.get('/', typeController);


module.exports = router;