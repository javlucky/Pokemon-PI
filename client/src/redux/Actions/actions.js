import axios from "axios";
import { LOADING, SEARCH_P, GET_ALL_P, GET_ALL_T, POKE_DETAIL, RESET_DETAIL,DELETE_P_API,FILTRO_AZ_ZA, 
    FILTRO_HP, FILTRO_ORIGEN, FILTRO_TYPES, RESET_F} from './actionsTypes.js'

    export const searchP = (name) => {
        return async function(dispatch){
            dispatch({type: LOADING});
    
            const resp = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            dispatch({type: SEARCH_P, payload: resp.data});
        }
    }
    export const getAllP = () => {
        return async function(dispatch){
            const resp = await axios.get("http://localhost:3001/pokemons");
            dispatch({type: GET_ALL_P, payload: resp.data});//resp.data porq le pego con axios
        }
    }
    export const getAllT = () => {
        return async function(dispatch){
            let resp = await fetch("http://localhost:3001/types");
            resp = await resp.json();
            dispatch({type: GET_ALL_T, payload: resp});
        }
    }
    export const pokeDetail = (id) => {
        return async function(dispatch){
            let resp = await fetch(`http://localhost:3001/pokemons/details/${id}`);
            resp = await resp.json();
            dispatch({type: POKE_DETAIL, payload: resp});
        }
    }
    export const resetDetail = () => {
        return{ type: RESET_DETAIL}
    }
    export const postPoke = (data) => {
        return async function(dispatch){
            /* let resp = */ await axios.post("http://localhost:3001/pokemons/create", data);
        }
    }
    export const modifP = (info) => {
        return async function(){
            await axios.put("http://localhost:3001/pokemons/modif", info)
           
       }
    }
    //---deletes-----
    export const deleteP_DB = (id) => {
        return async function(){
            await axios.delete(`http://localhost:3001/pokemons/delete/${id}`);
        }
    }
    export const deleteP_api = (id) => {
        return {
            type: DELETE_P_API,
            payload: id
        }
    }
    
    //-----filtros----
    export const filtroAZ_ZA = (filtro) => {
        return{
            type:FILTRO_AZ_ZA,
            payload: filtro
        }
    }
    export const filtroHP = (filtro) => {
        return{
            type: FILTRO_HP,
            payload: filtro
        }
    }
    export const filtroOrigen = (filtro) => {
        return{
            type: FILTRO_ORIGEN,
            payload: filtro
        }
    }
    export const filtroTypes = (tipos) => {
        return{
            type: FILTRO_TYPES,
            payload: tipos
        }
    }
    export const resetF = () => {
        return{
            type: RESET_F,
        }
    }

/*export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

export const getPokemons = () => {
    return async function(dispatch){
        const apiData = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemons = apiData.data.results;
        dispatch({type: GET_POKEMONS, payload: pokemons});
    };
};

export const getPokemon = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = apiData.data.results;
        dispatch({type: GET_POKEMON, payload: pokemon});
    };
};*/