const { Tipo } = require('../db');
const axios = require("axios");

const cleanArrayType = (arr) => 
    arr.results.map((data) => {
        return {
            id: data.ID,
            name: data.name,
            created: false,
        };
    });

//const getPokemonByType = async (name) => {
    //const typePokemon = await Tipo.findAll({ where:{ name }});
    //console.log(typePokemon);
    //return typePokemon;
//};

const getPokemonByType = async () => {
    const dataBaseTypePokemons = await Tipo.findAll();

    const apiPokemonsTypeRaw = (
        (await axios.get("https://pokeapi.co/api/v2/type")
    )).data;

    const apiTypePokemons = cleanArrayType(apiPokemonsTypeRaw);

    //const totalInfo = dataBasePokemons.concat(apiPokemons);
    return [...dataBaseTypePokemons, ...apiTypePokemons];
    //return totalInfo;
};


module.exports = { getPokemonByType };