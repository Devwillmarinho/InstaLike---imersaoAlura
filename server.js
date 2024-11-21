import express from "express";
import routes from "./src/Routes/postRoutes.js";

const app = express();
routes(app)

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que está pronto para receber requisições
