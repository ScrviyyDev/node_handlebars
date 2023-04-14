import Express from "express";
import { engine } from "express-handlebars";

const app = Express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});