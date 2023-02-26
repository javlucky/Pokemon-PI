const { getPokemonByType } = require('../Controllers/types.controller');

const typeHandler = async (req, res) => {
    const { name } = req.body;
    try { 
        const type = await getPokemonByType(name);
        res.status(201).json(type);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = typeHandler;