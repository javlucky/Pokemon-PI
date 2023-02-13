const Router = require('express');
const router = Router();
const pokemonController = require('../controllers/pokemon.controller');

router.get('/', pokemonController);


module.exports = router;