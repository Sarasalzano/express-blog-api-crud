// importo il modulo Express
const express = require("express");
// creo un’istanza del router
const router = express.Router();

// index: restituisce la lista dei post
router.get("/", function (req, res) {
  res.send("Lista dei post");
});

// show: restituisce i dettagli di un singolo post in base all'id
router.get('/:id', function (req, res) {
  res.send("Dettagli del post " + req.params.id);
});

// store: crea un nuovo post
router.post("/", function (req, res) {
  res.send("Creazione nuovo post");
});

// update: aggiorna un post esistente con PUT
router.put("/:id", function (req, res) {
  res.send("Modifica post " + req.params.id);
});

// modify: modifica parziale di un post con PATCH
router.patch("/:id", function (req, res) {
  res.send('Modifica parziale del post ' + req.params.id);
});

// destroy: elimina un post in base all'id
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del post " + req.params.id);
});

// esporta il router per poterlo usare in app.js
module.exports = router;