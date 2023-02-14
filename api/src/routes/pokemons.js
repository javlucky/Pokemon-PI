const Router = require('express');
const {pokemonsController, pokemonController, createPokemon} = require('../controllers/pokemons.controller');
const router = Router();

router.get('/', pokemonsController);
router.get('/:id', pokemonController);
router.post('/', createPokemon);


module.exports = router;