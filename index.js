const express = require('express'); // bring in express library
const app = express();              // create a web server
const port = 3000;                  // define which port to listen on

// define what to do when someone visits the home page
app.get('/', (req, res) => {
  res.send('🚀 Hello from Kartheek\'s CI/CD pipeline!');
});

// start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

