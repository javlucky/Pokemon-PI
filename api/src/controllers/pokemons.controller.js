const pokemonsController = (req, res) => {
    res.send("esta ruta trae todos los pokemones");
};

const createPokemon = (req, res) => {
    res.send("esta ruta crea un nuevo pokemon");
};

module.exports = {
    pokemonsController,
    createPokemon
};