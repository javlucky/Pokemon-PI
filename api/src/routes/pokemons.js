const Router = require('express');
const { pokemonsHandler, pokemonHandler, createPokemonHandler, modifyPokemonHandler, deletePokemonHandler } = require('../handlers/pokemons.handler');
const validate = require('../middlewares/validaciones');
const router = Router();


router.get('/', pokemonsHandler);
router.get('/:id', pokemonHandler);
router.post('/create', validate, createPokemonHandler);
router.put('/modif', modifyPokemonHandler);
router.delete('/:id', deletePokemonHandler)


module.exports = router;