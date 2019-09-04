const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const Promise = require("bluebird");
const models = require('./models');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.use('/', express.static('public'))
app.use('/listing/:id', express.static('public'))


app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => res.send('Hello World'))
app.get('/api/photos/:propertyId', (req, res) => {
  const id = req.params.propertyId;
  const modelsPropertyListingGet = Promise.promisify(models.propertyListing.get)
  modelsPropertyListingGet(id, (results) =>
    res.json(results))
    .catch((err) => console.log(err))
})

app.listen(port, () => console.log(`Listening on port ${port}...`))