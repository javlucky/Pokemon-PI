const { Pokemon, Type } = require('../db');
const axios = require("axios");

/*const cleanArray = (arr) => 
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
    });*/

const charactersByNameInApi = async (value) => {
            const charaterPrueba = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase().trim()}`)
            const characterValue = {
                id:charaterPrueba.data.id,
                name:charaterPrueba.data.name,
                hp:charaterPrueba.data.stats[0].base_stat,
                attack: charaterPrueba.data.stats[1].base_stat,
                defense: charaterPrueba.data.stats[2].base_stat,
                speed: charaterPrueba.data.stats[5].base_stat,
                height:charaterPrueba.data.height,
                weight: charaterPrueba.data.weight,
                types: charaterPrueba.data.types.map(m=>m.type.name),
                img: charaterPrueba.data.sprites.other.dream_world.front_default,
            }
            return characterValue
};

const createPokemon = async (
    { name, hp, attack, defense, speed, height, weight, type, img, created }) => {
        console.log(name);
        if(name){
            let findDB = await Pokemon.findOne({
                    where: {name: name}
                })
            if(await findCharacterInApi(name)) throw new Error('the pokemon already exists...')
            else if(findDB) throw new Error('the pokemon already exists...')
            else {let pokemonCreate= await Pokemon.create({
                name: name,
                hp: hp,
                attack: attack,
                defense: defense,
                speed: speed,
                height: height,
                weight: weight,
                img: img,
                created: created
            })
            
            let typesDb = await Type.findAll({
                where: {name:type}
            })
            
            pokemonCreate.addType(typesDb)
            return 'Pokemon created successfully'
        }
        }else{
            return 'You must enter a name'
        }
};

const getPokemonById = async (value) => {
    if(value.length>5){
            const findDbID= await Pokemon.findByPk(value, {include:Type})
            const detailOfPoquemonInDb = {
                id:findDbID.id,
                name: findDbID.name,
                hp:findDbID.hp,
                attack:findDbID.attack,
                defense:findDbID.defense,
                speed: findDbID.speed,
                height:findDbID.height,
                weight: findDbID.weight,
                types: findDbID.types.map(m=>m.name),
                img: findDbID.img,
                created:findDbID.InDB
            }
            return detailOfPoquemonInDb
    }else{ 
        return charactersByNameInApi(value)
    }
};

const pokemonsByNameInApi = async (value) => {
        const charaterPrueba = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase().trim()}`)
        const characterValue = {
            id:charaterPrueba.data.id,
            name:charaterPrueba.data.name,
            height:charaterPrueba.data.height,
            hp:charaterPrueba.data.stats[0].base_stat,
            attack: charaterPrueba.data.stats[1].base_stat,
            defense: charaterPrueba.data.stats[2].base_stat,
            speed: charaterPrueba.data.stats[5].base_stat,
            weight: charaterPrueba.data.weight,
            types: charaterPrueba.data.types.map(m=>m.type.name),
            img: charaterPrueba.data.sprites.other.dream_world.front_default,
        }
        return characterValue
};

const searchPokemonByName = async (name) => {
    let findNameInDb = await Pokemon.findAll({
        where:{name:name.toLowerCase().trim()},
        attributes:["id","name","hp","attack","defense","speed","height","weight","img",],
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes:[],
            },
        }
    })

    findNameInDb= findNameInDb.map(m=>{
        return {
        ...m.dataValues, 
       types: m.types?.map(m=>m.name)
    }})

    if(!findNameInDb[0]) return pokemonsByNameInApi(name)

    return findNameInDb[0]
};

const getAllPokemons = async () => {
    const primerllamadaApiLimit = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const pokemonsLLamados1 = await primerllamadaApiLimit.data.results.map(m=>{return axios.get(m.url)})

    const llamada2 = await axios.get(primerllamadaApiLimit.data.next)
    const pokemonsLLamados2 = await llamada2.data.results.map(m=>{return axios.get(m.url)})
    
    const totalPokemons = [...pokemonsLLamados1,...pokemonsLLamados2]

    const resPromises = await Promise.all(totalPokemons)

    const pokemonsData = resPromises.map(p=>{
        return{ 
                id: p.data.id,
                name: p.data.name,
                img: p.data.sprites.other.dream_world.front_default,
                attack: p.data.stats[1].base_stat,
                types: p.data.types.map(m=>m.type.name),
              }
    })

    let llamadaDataDb = await Pokemon.findAll({
        attributes:['name','img','id','created','attack'],
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes:[],
            },
        }
    })

    llamadaDataDb= llamadaDataDb.map(m=>{
        return {
        ...m.dataValues, 
        types: m.types?.map(m=>m.name)
    }})

    let llamadaTotal = [...llamadaDataDb,...pokemonsData]

    return llamadaTotal

};

/*const getAllPokemons = async () => {
    const dataBasePokemons = await Pokemon.findAll();

    const apiPokemonsRaw = (
        (await axios.get("https://pokeapi.co/api/v2/pokemon")
    )).data;

    const apiPokemons = cleanArray(apiPokemonsRaw);

    //const totalInfo = dataBasePokemons.concat(apiPokemons);
    return [...dataBasePokemons, ...apiPokemons];
    //return totalInfo;
};*/

const deletePokemon = async (id) => {
    let elimP = await Pokemon.destroy({
        where: {id}
    });
 
    return elimP;
 }

module.exports = { createPokemon, getPokemonById, searchPokemonByName, getAllPokemons, deletePokemon };