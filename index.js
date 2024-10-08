require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Basic Configuration
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let count = 0
app.post('/api/shorturl', function(req, res) {

  
  const url = req.body.url
  count = count + 1
  res.set('short_url', 'test')
  console.log(req.body, count)

  res.json({"original_url": req.body.url})
})



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
