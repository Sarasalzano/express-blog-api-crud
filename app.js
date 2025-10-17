// importo il modulo Express
const express = require("express");
// creo un’istanza dell’app Express
const app = express();
// definisco la porta su cui il server ascolta
const port = 3000;
// importo il router dei post
const postsRouter = require('./routers/postsRouter');

// middleware per servire file statici
app.use(express.static("public"));

// imposto il prefisso /posts per tutte le rotte definite nel file del router
app.use("/posts", postsRouter);

// rotta principale "/" che restituisce un messaggio semplice
app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
});

// avvio il server sulla porta definita
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});