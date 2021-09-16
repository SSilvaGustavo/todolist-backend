const Error400 = (res) => res.status(400);

const Error404 = (res) => res.status(404).send("Pagina não encontrada");

const Error400infos = (req, res) => {
  const body = req.body;
  res.status(400)
    .send(`Tarefa Invalida, verifique se todos os campos foram preenchidos:\n
 tarefa: ${body.tafera}
 descrição: ${body.descricao}
 prioridade: ${body.prioridade}
 status: ${body.status}
 prazo: ${body.prazo}`);
};

module.exports = { Error404, Error400, Error400infos };
