const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.get('/', (req, res, nex) => {
  res.send('Hello world from Cloud! :)');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
