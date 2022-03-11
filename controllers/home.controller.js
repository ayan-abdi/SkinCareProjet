<<<<<<< HEAD
const yup = require('yup');
const { contactValidator } = require('../form-validator/contact-validator');
const productData = require('../data/product-data.json');

=======
const Logger = require("nodemon/lib/utils/log");
const contactValidator = require("../form-validator/contact-validator");
>>>>>>> 4042c3454bc69c012e2f87491e36eb95ed05045f


const homeController = {

    /**
     * 
     * @param {express.request} req 
     * @param {express.response} res 
     */

    accueil: (req, res) => {
        res.render('home/accueil');
        // A completer par le chemin: res.render('/', {options})
    },
    about: (req, res) => {
        res.render('home/about');
    },
    contact: (req, res) => {

        res.render('home/contact');
    },
<<<<<<< HEAD
    catalogue: (req, res) => {

        // const finId = productData.products.find(products => products.id === products);
        // console.log(finId);
        res.render('home/catalogue');
=======
    contactResponse:(req, res) => {
       if(!contactValidator.isValidSync(req.body)) {
        return; res.redirect('/contact');
     
       }
       console.log(req.body);

       console.log(req.file);
       res.render('home/contacResponse');
>>>>>>> 4042c3454bc69c012e2f87491e36eb95ed05045f
    },
    produit: (req, res) => {
        // console.log(productData.products[0].id);
        // récupration de l'id-url
        const idUrl = parseInt(req.params.id);
        const findId = productData.filter(child => child.id === idUrl);
            console.log(findId);
        
        res.render('home/product', { findId });
    },
    
    
    // res.render('home/product');


contactResponse: (req, res) => {
    if (!contactValidator.isValidSync(req.body)) {
        res.redirect('/contact');
            return;
            
        }
        // console.log(req.body);
        
        console.log(req.file);
        res.render('home/contactResponse');
    }
};
  



module.exports = homeController;
// console.log(id);
// boucle sur la liste des produit pour trouver le produit avec le bon ID => forEach
// productData.forEach(child => {
//     if(child.id === id) {
//        child = element
//  // envoi des données de ce produit vers la page ejs
//     };