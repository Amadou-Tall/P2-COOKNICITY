const { modelName } = require('../models/userM');
const userModel = require('../models/userM');

module.exports = {
    index
};


function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    userModel.find({})
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      res.render('index', { title: 'Cooknicity',
        users,
        user: req.user, 
        name: req.query.name, 
        sortKey });
    });
  }