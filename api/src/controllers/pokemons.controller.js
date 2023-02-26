const { Pokemon, Type } = require('../db');
const axios = require("axios");

const cleanArray = (arr) => 
    arr.results.map((data) => {
        return {
            id: data.ID,
            name: data.name,
            vida: data.vida,
            ataque: data.ataque,
            defensa: data.defensa,
            velocidad: data.velocidad,
            altura: data.altura,
            peso: data.peso,
            tipo: data.tipo,
            created: false,
        };
    });

const createPokemon = async (
    ID, name, vida, ataque, defensa, velocidad, altura, peso, tipo) => 
        await Pokemon.create({
            ID, name, vida, ataque, defensa, velocidad, altura, peso, 
                include: {
                  model: Type,
                },
            
        });

const getPokemonById = async (id, source) => {
    const pokemon = 
        source === "api" 
        ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
          .data
        : await Pokemon.findByPk(id);
        
    return pokemon;
};

const searchPokemonByName = async (name) => {
    const dataBasePokemons = await Pokemon.findAll({ where: { name } });

    const apiPokemonsRaw = (
        (await axios.get("https://pokeapi.co/api/v2/pokemon")
    )).data;

    const apiPokemons = cleanArray(apiPokemonsRaw);

    const filteredApi = apiPokemons.filter((pokemon) => pokemon.name === name);

    return [...filteredApi, ...dataBasePokemons];
}

const getAllPokemons = async () => {
    const dataBasePokemons = await Pokemon.findAll();

    const apiPokemonsRaw = (
        (await axios.get("https://pokeapi.co/api/v2/pokemon")
    )).data;

    const apiPokemons = cleanArray(apiPokemonsRaw);

    //const totalInfo = dataBasePokemons.concat(apiPokemons);
    return [...dataBasePokemons, ...apiPokemons];
    //return totalInfo;
};


module.exports = { createPokemon, getPokemonById, searchPokemonByName, getAllPokemons };