const mongoose = require("mongoose");

const listModel = new mongoose.Schema({
  tarefa: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: Date },
  dataCriacao: { type: Date, default: Date.now },
});

const Lists = mongoose.model("todo-list", listModel);

module.exports = Lists;
