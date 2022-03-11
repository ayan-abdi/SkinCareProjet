const express = require('express');
const homeRouter = require('./routes/home-routes');
const app = express();
const port = 8080;


// Utilisation automatique de moteur de vue
app.set('view engine', 'ejs');
app.set('views','./views');

<<<<<<< HEAD

app.use(express.static('public'));
=======
app.use(express.urlencoded({ extended: true }))
>>>>>>> 4042c3454bc69c012e2f87491e36eb95ed05045f

// app.use(homRouter);
app.use(homeRouter);

app.listen(port, () => {
    console.log(`Welcome in my first app on : ${ port}`);
});