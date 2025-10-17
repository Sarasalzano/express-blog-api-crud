//import dell array dei post
const posts = require("../data/posts");

//riporto logica delle funzioni che si trovano nel router. In questo caso la funzione index
function index(req, res) {
    res.json(posts);
}

//funzione show
function show(req, res) {
    res.send("Dettagli del post " + req.params.id);
}

//funzione store
function store(req, res) {
    res.send("Creazione nuovo post");
}

//funzione update
function update(req, res) {
    res.send("Modifica post " + req.params.id);   
}

//funzione modify 
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

//funzione delete 
function destroy(req, res) {
    res.send("Eliminazione del post " + req.params.id);
}

module.exports = {index, show, store, update, modify, destroy}; 