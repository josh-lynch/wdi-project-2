const User = require('../models/user');
const Message = require('../models/message');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('rockets cards')
    .exec()
    .then(user => {
      Message
        .find()
        .exec()
        .then(usrMessages => res.render('users/show', { user, usrMessages }));
    })
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow
};
