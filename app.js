require('dotenv').config(); 
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

// usar handlebars como view engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Carlos Gonzalez',
    title: 'Home Page Node.js'
  })
});


app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Carlos Gonzalez',
    title: 'Elements Page Node.js'
  })
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Carlos Gonzalez',
    title: 'Generic Page Node.js'
  })
});

app.get('*', (req, res) => {
  res.send("404 | Page not found")
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});