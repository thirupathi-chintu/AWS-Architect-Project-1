// server.js
//
import express from 'express';
const PORT = process.env.HTTP_PORT || 3000;
const app = express();app.get('/', (req, res) => {
  res.send('Python API for just gonna send it');
});

app.get('/flower', (req, res) => {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
