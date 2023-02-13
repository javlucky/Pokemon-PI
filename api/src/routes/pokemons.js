const Router = require('express');
const router = Router();
const {pokemonsController, createPokemon} = require('../controllers/pokemons.controller');

router.get('/', pokemonsController);
router.post('/', createPokemon);


module.exports = router;