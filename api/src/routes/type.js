const Router = require('express');
const router = Router();
const typeHandler = require('../handlers/type.handler');

router.get('/', typeHandler);


module.exports = router;