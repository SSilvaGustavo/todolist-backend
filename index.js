if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSucessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const port = 3001;

const Conn = require("./models/conn/conn");
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const list = require("./routers/list.routes");
app.use("/list", list);

app.get("*", function (req, res) {
  res.status(404).send("Pagina Invalida");
});

app.listen(process.env.PORT || port, () => {
  console.info(`Servidor está rodando na porta ${port}`);
});
