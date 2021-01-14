const aboutModel = require('../models/aboutM');

module.exports = {
    showAbout
};

function showAbout(req, res) {
    res.render('about.ejs', {title: 'About Cooknicity'});
    // res.send("About");
}
