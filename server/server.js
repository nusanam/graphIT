const express = require('express');
const app = express();
const path = require('path');
// does this edit the port web-dev uses when running npm run start?
const port = 3000; 

app.get('/', (req, res) => {
  res.status(200).send('YOOOO dis get request to route "/" is working!')
});

//the following code serves any images, CSS files, and JavaScript files in a directory named public:
app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.listen(port, () => {
  console.log(`Now listening on port ${port}...`)
});