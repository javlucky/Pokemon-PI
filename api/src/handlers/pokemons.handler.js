const { createPokemon, getPokemonById, searchPokemonByName, getAllPokemons } = require('../Controllers/pokemons.controller');

const pokemonsHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchPokemonByName(name) : await getAllPokemons();

    res.status(200).json(results);
};


const pokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonById(id, source);
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: "No existe ese Pokemon" });
    }
        
};

const createPokemonHandler = async (req, res) => {
    const {ID, name, vida, ataque, defensa, velocidad, altura, peso, tipo} = req.body;
    try {
        const newPokemon = await createPokemon(ID, name, vida, ataque, defensa, velocidad, altura, peso, tipo);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    pokemonsHandler,
    pokemonHandler,
    createPokemonHandler
};