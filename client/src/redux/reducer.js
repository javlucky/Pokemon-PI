import { LOADING, SEARCH_P, GET_ALL_P, GET_ALL_T, POKE_DETAIL, RESET_DETAIL,DELETE_P_API,
    FILTRO_AZ_ZA, FILTRO_ATTACK, FILTRO_ORIGEN, FILTRO_TYPES, RESET_F} from './Actions/actionsTypes.js'

const initialState = {
allPokes: [],
resultsPokes: [],
pokeDetails: {},
allTypes: [],
load: false
};

const rootReducer = (state = initialState, action) => {
switch(action.type){
   case LOADING:
       return{
           ...state,
           load: true
       }
   case SEARCH_P:
       return{
           ...state,
           resultsPokes: action.payload,
           load: false
       }
   case GET_ALL_P:
       return{
           ...state,
           allPokes: action.payload,
           resultsPokes: action.payload,
           load: false
       }
   case GET_ALL_T:
       return{
           ...state,
           allTypes: action.payload
       }
   case POKE_DETAIL:
       return{
           ...state,
           pokeDetails: action.payload
       }
   case RESET_DETAIL:
       return{
           ...state,
           pokeDetails: {}
       }        
   case DELETE_P_API:
       let filtraApi = state.resultsPokes.filter(p => p.id !== action.payload);

       return{
           ...state,
           resultsPokes: filtraApi
       }        
   case RESET_F:
       return{
           ...state,
           resultsPokes: state.allPokes
       }
   case FILTRO_AZ_ZA:
       let ordenaAZ_ZA = [...state.resultsPokes];//sino asigno una copia NO se xq no renderizaba, 
       console.log(action.payload);
       if(action.payload === 'a-z'){              //si ordenaba en el estado global
           ordenaAZ_ZA = ordenaAZ_ZA.sort((a,b)=>{
               let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
               if(nameA > nameB) return 1;
               if(nameA < nameB) return -1;
               return 0;
           })
       }
       if(action.payload === 'z-a'){
           ordenaAZ_ZA = ordenaAZ_ZA.sort((a,b)=>{
               let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
               if(nameA > nameB) return -1;
               if( nameA < nameB) return 1;
               return 0;
           })
       }
       return{
           ...state,
           resultsPokes: ordenaAZ_ZA
       }
   case FILTRO_ATTACK:
       let ordena_attack = [...state.resultsPokes];
       if(action.payload === 'max'){
           ordena_attack.sort((a,b)=>{
           if(a.attack < b.attack) return 1;
           if(b.attack < a.attack) return -1;
           return 0;
           })
       }
       if(action.payload === 'min'){
           ordena_attack.sort((a,b)=>{
               if(a.attack < b.attack) return -1;
               if(b.attack < a.attack) return 1;
               return 0;
           })
       }
       return{
           ...state,
           resultsPokes: ordena_attack
       }
   case FILTRO_ORIGEN:
       let origen = [...state.allPokes];
       if(action.payload === 'db'){
            origen = origen.filter(p => p.created);
       }
       if(action.payload === 'api'){
           origen = origen.filter(p => !p.created);
       }
        return{
           ...state,
           resultsPokes: origen,
           load: false
       }
   case FILTRO_TYPES:
       let fil_types = [...state.resultsPokes].filter(p => p.types.findIndex(t => t.name === action.payload) >= 0);
       return{
           ...state,
           resultsPokes: fil_types,
           load: false
       }
   default:
       return state;
}
}

/*const initialState = {
    pokemons: [],
    pokemon: {},
};

const rootReducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, pokemons: action.payload };
        default:
            return { ...state };
    
        case GET_POKEMON:
            return { ...state, pokemon: action.payload };
    };
};*/

export default rootReducer;