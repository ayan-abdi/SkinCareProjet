const express = require('express');
const homeController = require('../controllers/home.controller');
const homeRouter = express.Router()

const multer = require('multer');
const upload = multer({ dest: 'storage'});


homeRouter.get('/', homeController.accueil);
homeRouter.get('/about', homeController.about);
homeRouter.get('/contact', homeController.contact);
<<<<<<< HEAD
homeRouter.get('/catalogue',homeController.catalogue);
homeRouter.get('/catalogue/:id',homeController.produit);
   
homeRouter.get('/', homeController.contactResponse);
// Injecter le multer
homeRouter.post('/contact', upload.single('myFile'), homeController.contactResponse);
=======
// homeRouter.get('/contactResponse', homeController.contactResponse);
homeRouter.get('/news', homeController.news);
// Injecter le multer
homeRouter.post('/contact',upload.single('myFile'), homeController.contactResponse);
>>>>>>> 4042c3454bc69c012e2f87491e36eb95ed05045f






module.exports = homeRouter;



