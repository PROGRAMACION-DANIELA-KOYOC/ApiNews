//var express = require('express');

//const {get, getById, create, update, destroy}  = require('../controllers/ProfileController');
///const api = express.Router();

//api.get('/perfiles', get);
//api.get('/perfiles/:id', getById)
//api.post('/perfiles', create)
//api.put('/perfiles/:id', update)
//api.delete('/perfiles/:id', destroy)


//module.exports = api;



var express = require('express');

const {get, getById, }  = require('../controllers/ProfileController');
const { authenticateAdmin } = require('../middlewares/jwt')


const api = express.Router();

api.get('/perfiles', get);
api.get('/perfiles/:id', getById)


module.exports = api;