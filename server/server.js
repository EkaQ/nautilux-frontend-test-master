const express = require('express');
const app = express();
const data = require('./data.json');
var cors = require('cors')

const PORT = process.env.PORT || 3001;

app.use(cors())
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  res.json(data);
});
