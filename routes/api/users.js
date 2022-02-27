const CheckHeaderMiddleware = require('../../app/Http/Middleware/CheckHeaderMiddleware');
const UsersController = require('../../app/Http/Controllers/UsersController');

module.exports.setRoutes = function (router) {
  router.post(
    '/users',
    [CheckHeaderMiddleware.accept, CheckHeaderMiddleware.contentType],
    UsersController.createUser
  );
  router.get(
    '/users/:id',
    [CheckHeaderMiddleware.accept],
    UsersController.getUser
  );
};
