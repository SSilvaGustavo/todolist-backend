const express = require("express");
const router = express.Router();
const Controller = require("../controllers/control");
const List = require("../models/lists");

const body = (req) => {
  return req.body;
};

const id = (req) => {
  return req.params.id;
};

router.get("/", async (req, res) => {
  await List.find({}, (err, list) => {
    if (err) {
      Controller.Error400(res).send("Tafera Invalida");
    } else {
      res.status(200).send(list);
    }
  });
});

router.get("/tarefa/:id", async (req, res) => {
  await List.findOne({ _id: id(req) })
    .then((list) => {
      res.status(202).send(`Tarefa encontrado com sucesso
      ${list}`);
    })
    .catch((err) => {
      Controller.Error400(res).send("ID de Tarefa invalido, tente novamente");
      console.error(err);
    });
});

router.post("/new", async (req, res) => {
  await List.create(body(req))
    .then(() => {
      res.status(201).send("Tarefa criada");
    })
    .catch((err) => {
      Controller.Error400infos(req, res);
      console.error(err);
    });
});

router.put("/uptade/:id", async (req, res) => {
  await List.updateOne({ _id: id(req) }, body(req))
    .then(() => {
      res.status(200).send("Tarefa alterado com sucesso");
    })
    .catch((err) => {
      Controller.Error400infos(req, res);
      console.error(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  List.deleteOne({ _id: id(req) })
    .then(() => {
      if (id(req) === null) {
        res.send("ID invalido");
      }else{
      res.status(200).send("Tarefa removida com sucesso");}
    })
    .catch((err) => {
      Controller.Error400(res).send("ID de Tarefa invalido, tente novamente");
      console.error(err);
    });
});

module.exports = router;
