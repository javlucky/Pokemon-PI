const initialState = {
    pokemons: [
            {
                "id": "66df62c7-9457-4b23-85e5-d56816737ca1",
                "name": "pikachu",
                "vida": 100,
                "ataque": 70,
                "defensa": 60,
                "velocidad": 20,
                "created": true
            },
            {
                "id": "9a1aa280-db21-4353-8771-04dcf0ba8b26",
                "name": "mew",
                "vida": 100,
                "ataque": 70,
                "defensa": 60,
                "velocidad": 20,
                "created": true
            },
            {
                "name": "bulbasaur",
                "created": false
            },
            {
                "name": "ivysaur",
                "created": false
            },
            {
                "name": "venusaur",
                "created": false
            },
            {
                "name": "charmander",
                "created": false
            },
            {
                "name": "charmeleon",
                "created": false
            },
            {
                "name": "charizard",
                "created": false
            },
            {
                "name": "squirtle",
                "created": false
            },
            {
                "name": "wartortle",
                "created": false
            },
            {
                "name": "blastoise",
                "created": false
            },
            {
                "name": "caterpie",
                "created": false
            },
            {
                "name": "metapod",
                "created": false
            },
            {
                "name": "butterfree",
                "created": false
            },
            {
                "name": "weedle",
                "created": false
            },
            {
                "name": "kakuna",
                "created": false
            },
            {
                "name": "beedrill",
                "created": false
            },
            {
                "name": "pidgey",
                "created": false
            },
            {
                "name": "pidgeotto",
                "created": false
            },
            {
                "name": "pidgeot",
                "created": false
            },
            {
                "name": "rattata",
                "created": false
            },
            {
                "name": "raticate",
                "created": false
            }
        
    ],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return { ...state };
    }
};

export default rootReducer;