const Router = require('express');
const { pokemonsHandler, pokemonHandler, createPokemonHandler } = require('../handlers/pokemons.handler');
const validate = require('../middlewares/validaciones');
const router = Router();


router.get('/', pokemonsHandler);
router.get('/:id', pokemonHandler);
router.post('/', validate, createPokemonHandler);


module.exports = router;