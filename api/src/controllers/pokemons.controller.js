const pokemonsController = (req, res) => {
    const { name } = req.query;
    if (name) res.send(`Quiero buscar todos los que se llamen ${name}`)
    else  res.send("Quiero enviar todos los pokemones");
};

const pokemonController = (req, res) => {
    const { id } = req.params;
        res.send(`Va a enviar el detalle del usuario ID ${id}`);
};

const createPokemon = (req, res) => {
    const { id, name, life, atack, defense, speed, height, weight, type} = req.body;
    res.send(`Estoy creando un pokemon con estos datos:
    id:${id},
    name:${name},
    life:${life},
    atack:${atack},
    defense:${defense},
    speed:${speed},
    height:${height},
    weight:${weight},
    type:${type}
    `);
};

module.exports = {
    pokemonsController,
    pokemonController,
    createPokemon
};