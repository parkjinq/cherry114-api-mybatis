const express = require('express');

const memberController = require('../controller/member');

const routes = express.Router();

routes.get('/getInfo', memberController.getMembers);

routes.post('/insert', memberController.insertCommunity);

routes.get('/getmycm', memberController.getMyCm);


module.exports = routes;