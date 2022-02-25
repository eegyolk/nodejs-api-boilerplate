const UsersController = require('../../app/Http/Controllers/UsersController');

module.exports.setRoutes = function (router) {
  router.post('/users', UsersController.createUser);
};
