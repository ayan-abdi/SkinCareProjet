const express = require('express');
const homeController = require('../controllers/home.controller');
const homeRouter = express.Router()

const multer = require('multer');
const upload = multer({ dest: 'storage'});


homeRouter.get('/', homeController.accueil);
homeRouter.get('/about', homeController.about);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/catalogue',homeController.catalogue);
homeRouter.get('/catalogue/:id',homeController.produit);
   
homeRouter.get('/', homeController.contactResponse);
// Injecter le multer
homeRouter.post('/contact', upload.single('myFile'), homeController.contactResponse);






module.exports = homeRouter;



