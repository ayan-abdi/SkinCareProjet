const express = require('express');
const homeRouter = require('./routes/home-routes');
const app = express();
const poort = 8080;


// Utilisation automatique de moteur de vue
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }))

// app.use(homRouter);
app.use(homeRouter);

app.use(express.static('public'))


app.listen(poort, () => {
    console.log(`Welcome in my first app on : ${ poort}`);
});