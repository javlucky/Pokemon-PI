const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons');
const types = require('./types');
const pokemon = require('./pokemon');
const name = require('./name');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons);
router.use('/types', types);
router.use('/pokemon/:id', pokemon);
router.use('/name', name);

module.exports = router;
