// app.js
const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/getAllBooks', bookController.getAllBooks);
app.post('/addBook', bookController.addBook);
app.post('/returnBook/:id', bookController.returnBook);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
