module.exports = (app) => {

  const users = require('../controllers/user.controller.js'); 

  app.post('/users', users.create);

  app.get('/users', users.findAll);

  app.get('/users/:userId/edit', users.findOne);

  app.post('/users/:userId/edit', users.update);

  app.post('/users/:userId', users.delete);
}