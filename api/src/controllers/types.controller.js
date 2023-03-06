const { Type } = require('../db');
const axios = require("axios");

/*const cleanArrayType = (arr) => 
    arr.results.map((data) => {
        return {
            id: data.ID,
            name: data.name,
            created: false,
        };
    });*/


const getPokemonByType = async () => {
    let typeInDb = await Type.findAll()
    
    if(typeInDb.length===0){
        
        let llamadoALaApi = await axios.get('https://pokeapi.co/api/v2/type');
        let typeInApi = llamadoALaApi.data.results.map(t =>{return {name: t.name}});
        typeInDb = await Type.bulkCreate(typeInApi)

    }
    return typeInDb
};

/*const getPokemonByType = async () => {
    const dataBaseTypePokemons = await Tipo.findAll();

    const apiPokemonsTypeRaw = (
        (await axios.get("https://pokeapi.co/api/v2/type")
    )).data;

    const apiTypePokemons = cleanArrayType(apiPokemonsTypeRaw);

    //const totalInfo = dataBasePokemons.concat(apiPokemons);
    return [...dataBaseTypePokemons, ...apiTypePokemons];
    //return totalInfo;
};*/


module.exports = { getPokemonByType };