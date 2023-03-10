const { createPokemon, getPokemonById, searchPokemonByName, getAllPokemons, deletePokemon } = require('../Controllers/pokemons.controller');

const pokemonsHandler = async (req, res) => {
    const { name } = req.query;
    try {
    const results = name ? await searchPokemonByName(name) : await getAllPokemons();
    res.status(200).json(results);
    } catch (error){
        res.status(400).json({error: error.message})
    }
};


const pokemonHandler = async (req, res) => {
    const { id } = req.params;
    //const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonById(id);
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: "No existe Pokemon para ese ID" });
    }
        
};

const createPokemonHandler = async (req, res) => {
    
    const {name, hp, attack, defense, speed, height, weight, type, region, img, created } = req.body;
    //const data = req.body;
    try {
        console.log(name);
        const newPokemon = await createPokemon(name, hp, attack, defense, speed, height, weight, type, region, img, created );
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const modifyPokemonHandler = async (req, res) => {
    const{ name, hp, attack } = req.body;
    try {
        const actualizado = await Pokemon.update({
            hp: hp,
            attack: attack,
        },{
            where: { name }
        });
        res.status(201).json(actualizado);
    } catch(error) {
        res.status(400).json({ error: "Error al modificar" });
    }
};

const deletePokemonHandler = async (req,res) => {
    const {id} = req.params;

    try {
        let deletePoke = await deletePokemon(id);

        res.status(201).json(deletePoke);
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar" });
    }
};

module.exports = {
    pokemonsHandler,
    pokemonHandler,
    createPokemonHandler,
    modifyPokemonHandler,
    deletePokemonHandler
};