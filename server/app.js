const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./router');
const meta = require("./content/meta.json");
const sort = require("../src/js/sort");
const app = express();
const port = 3000;

const hbs = exphbs.create({
  helpers: {
      dateFormat: sort.formatDate,
      json: function (context) {
          return JSON.stringify(context);
      }
  }
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('meta', meta);

app.use('*/static', express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
