const express = require('express');
const routes = express.Router();

const ProfileValidator = require('./validators/ProfileValidator');
const SessionValidator = require('./validators/SessionValidator');
const OngsValidator = require('./validators/OngsValidator');
const IncidentsValidator = require('./validators/IncidentsValidator');


const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/profile', ProfileValidator(), ProfileController.index);

routes.post('/sessions', SessionValidator(), SessionController.create);

routes.get('/ongs', OngsController.index)

routes.post('/ongs', OngsValidator(), OngsController.create);


routes.get('/incidents', IncidentsValidator.index(), IncidentsController.index);

routes.post('/incidents', IncidentsValidator.create(), IncidentsController.create);

routes.delete('/incidents/:id', IncidentsValidator.delete(), IncidentsController.delete);

module.exports = routes;
