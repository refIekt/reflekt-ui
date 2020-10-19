const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const port = 3001

// Configure express.
app.use(express.static('.'));
app.use('/dist', express.static('../dist'));

// Configure body parser.
app.use(bodyParser.json());

// Respond with React app.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Handle keep request.
app.post('/keep', (req, res) => {
  console.log(req.body);
})

// Handle delete request.
app.post('/delete', (req, res) => {
  console.log(req.body);
})

// Listen for requests.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
