import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    const user = {
        name: "João",
        surname: "Silva",
        age: 30,
    }

    const palavra = "Teste";

    res.render("home", { user: user, palavra });
});

app.listen(3000, () => {
    console.log("Servidor executando...");
});