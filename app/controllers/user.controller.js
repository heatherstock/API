const User = require('../models/user.model.js');

exports.create = (req, res) => {

  const user = new User({
    forename: req.body.forename,
    surname: req.body.surname,
    email: req.body.email
  });

  user.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occured while creating the user"
    });
  });
};

exports.findAll = (req, res) => {

  User.find()
  .then(users => {
    res.send(users);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occured while retrieving the user"
    });
  });
};

exports.findOne = (req, res) => {

  User.findById(req.params.userId)
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    return res.status(500).send({
      message: "An error occured while retrieving user with id " + req.params.userId
    });
  });
};

exports.update = (req, res) => {

  User.findByIdAndUpdate(req.params.userId, {
    forename: req.body.forename,
    surname: req.body.surname,
    email: req.body.email
  }, {new: true})
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    return res.status(500).send({
      message: "An error occured while updating user with id " + req.params.userId
    });
  });
};

exports.delete = (req, res) => {

  User.findByIdAndRemove(req.params.userId)
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    res.send({ message: "User deleted" })
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "User with id " + req.params.userId + " not found"
      });
    }
    return res.status(500).send({
      message: "An error occured while deleting user with id " + req.params.userId
    });
  });
};