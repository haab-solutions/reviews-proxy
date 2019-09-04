const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(`/listing/:id`, express.static('public'));

app.get('/api/reviews/:id', (req, res) => {
  let id = req.params.id;
  db.getData(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.params.id);
      res.send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});