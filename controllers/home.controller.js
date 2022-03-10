const Logger = require("nodemon/lib/utils/log");
const contactValidator = require("../form-validator/contact-validator");


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
       if(!contactValidator.isValidSync(req.body)) {
        return; res.redirect('/contact');
     
       }
       console.log(req.body);

       console.log(req.file);
       res.render('home/contacResponse');
    },
    news:(req, res) => {
        res.render('home/news')
    },
};
  


module.exports =homeController;