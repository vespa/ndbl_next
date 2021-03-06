const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
/* eslint-disable  */
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// const handle = app.getRequestHandler();
const port = 5000;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.use(bodyParser.json());

 
  server.post('/api/contact', (req, res) => {
    console.log(req.body);
    res.send('success');
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost' + 5000);
  });
});
