const express = require('express');
const morgan = require('morgan');
//
const path = require('path'); 
const { engine } = require('express-handlebars');
//
const app = express();
const port = 3000;

app.use(express.static('pulic'));

app.use(express.static(path.join(__dirname,'public')));

// HTTP Logger
app.use(morgan('combined'));



// Template Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})