const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons');
const type = require('./type');
const pokemon = require('./pokemons');
//const name = require('./name');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons);
router.use('/type', type);
router.use('/pokemons/:id', pokemon);
//router.use('/name', name);

module.exports = router;
