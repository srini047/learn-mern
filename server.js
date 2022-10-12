const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

// Environment variables
dotenv.config({  path: 'config.env' })
const PORT = process.env.PORT || 8080

// Log requests
app.use(morgan('tiny'));

// Pass request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

// Set view engiene
app.set('view engine', 'ejs');

// Load assets
app.use('/css', express.static(path.join(__dirname, 'assets/css')));
app.use('/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));

app.get('/', (_req , res) => {
    res.render('index');
});

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
