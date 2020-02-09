const express = require('express');

const routes = express.Router();
const TemaController = require('../controllers/TemaController');

routes.get('/temas', TemaController.index);
routes.get('/temas/:temaId', TemaController.show);
routes.post('/temas', TemaController.store);
// routes.put('/temas', TemaController.update);
routes.delete('/temas/:temaId', TemaController.destroy);

module.exports = routes;
