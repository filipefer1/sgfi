const Tema = require('../models/tema');

module.exports = {
  async index(req, res) {
    const temas = await Tema.find();
    return res.status(200).json(temas);
  },

  async show(req, res) {
    const { temaId } = req.params;
    const tema = await Tema.findById(temaId);

    return res.status(200).json(tema);
  },

  async store(req, res) {
    const { title, toalhaDeMesa, bolo } = req.body;

    const tema = new Tema({
      detalhes: {
        title,
        toalha_de_mesa: toalhaDeMesa,
        bolo,
      },

    });

    const savedTema = await tema.save();
    return res.status(201).json(savedTema);
  },

  async destroy(req, res) {
    const { temaId } = req.params;
    const tema = await Tema.findByIdAndDelete(temaId);

    return res.status(200).json({
      message: 'Tema deleted',
      _id: tema._id,
    });
  },
};
