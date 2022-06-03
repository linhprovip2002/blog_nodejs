const express = require('express');
const morgan = require('morgan');
//
const path = require('path');
const { engine } = require('express-handlebars');
const { urlencoded } = require('express');
const { json } = require('express/lib/response');
const { query } = require('express');

//
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db')
db.connect();
app.use(express.static('pulic'));

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Template Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));

route(app); //routes init

app.listen(port, () => {
  console.log(`App app listening on port ${port}`);
});
