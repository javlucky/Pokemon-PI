const pokemonController = (req, res) => {
    res.status(200).send("esta ruta trae un pokemon por id");
};

module.exports = pokemonController;