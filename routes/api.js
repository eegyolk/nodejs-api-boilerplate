const express = require('express');

const usersApi = require('./api/users');

router = express.Router();

usersApi.setRoutes(router);

module.exports = router;
