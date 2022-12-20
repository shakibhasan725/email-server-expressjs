const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayouts = require('express-ejs-layouts');
const pageRouter = require('./routers/pageRouter')


//envirenment verriable

dotenv.config();

const PORT = process.env.port || 4040;

// init express

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//EJS init

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.set('layout', 'layouts/app');

//use static folder 

app.use(express.static('public'));



app.use(pageRouter);












app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black)
});