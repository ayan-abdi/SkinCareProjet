const express = require('express');
const homeController = require('../controllers/home.controller');
const multer = require('multer');
const upload = multer({ dest: 'storage'});

const homeRouter = express.Router()

homeRouter.get('/accueil', homeController.accueil);
homeRouter.get('/about',homeController.about);
homeRouter.get('/contact', homeController.contact);
// homeRouter.get('/contactResponse', homeController.contactResponse);
homeRouter.get('/news', homeController.news);
// Injecter le multer
homeRouter.post('/contact',upload.single('myFile'), homeController.contactResponse);






module.exports = homeRouter;



