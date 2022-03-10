const yup = require('yup');

const homeController = {
    accueil:(req, res) => {
        res.render('home/accueil');
        // A completer par le chemin: res.render('/', {options})
    },
    about:(req, res) => {
        res.render('home/about');
    },
    contact:(req, res) => {
        res.render('home/contact');
    },
    contactResponse:(req, res) => {
        res.sendStatus(501);
    },
    news:(req, res) => {
        res.render('home/news')
    },
};

module.exports =homeController;