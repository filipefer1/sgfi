const mongoose = require('mongoose');

const tema = new mongoose.Schema({
  detalhes: {
    title: {
      type: String,
      required: true,
    },
    bolo: {
      type: Boolean,
      default: true,
      required: true,
    },
    prato_descartavel: {
      type: Boolean,
      default: true,
    },
    copo_descartavel: {
      type: Boolean,
      default: true,
    },
    toalha_de_mesa: {
      type: Boolean,
      default: true,
      required: true,
    },
    balao: {
      type: Boolean,
      default: true,
    },
    convite: {
      type: Boolean,
      default: true,
    },
  },
  quantidade: {
    type: Number,
    default: 1,
  },
  disponivel: {
    type: Number,
    default: 1,
  },
  alugados: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tema', tema);
