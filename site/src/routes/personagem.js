var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.post ("/registrarPersonagem", function (req, res) {
    personagemController.registrarPersonagem(req, res);
});

router.get ("/mostrarPersonagem/:idUsuario", function (req, res) {
    personagemController.mostrarPersonagem(req, res);
});

router.post("/registrarTempoDeJogo", function (req, res) {
    personagemController.registrarTempoDeJogo(req, res);
});

router.get("/registrarTempoDeJogo/:idUsuario", function (req, res) {
    personagemController.mostrarMesjogados(req, res);
});

module.exports = router;