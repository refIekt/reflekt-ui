const express = require('express')
const path = require('path')
const vm = require("vm");
const fs = require('fs');

const app = express();
const port = 3001;
const db_path = 'db.js';

// Configure express.
app.use(express.json());
app.use(express.static('.'));
app.use('/dist', express.static('../dist'));

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

  // Get reflection ID.
  ref_id = req.body.ref_id;

  // Get database.
  var data = fs.readFileSync(db_path);
  const script = new vm.Script(data);
  script.runInThisContext();
  db = JSON.parse(db);

  // Delete reflection.
  for (let [index, reflection] of db.reflections.entries()) {
    if (reflection.r == ref_id) {
      console.log("DELETED:")
      console.log(db.reflections[index]);
      db.reflections.splice(index, 1);
      break;
    }
  }

  // Save database.
  try {
    fs.writeFileSync(db_path, 'var db = ' + JSON.stringify(JSON.stringify(db)) + ';');
  }
  catch (err) {
    console.error(err)
  }

  res.send(200, { message: 'ok' });

})

// Listen for requests.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




//fs.readFile('student.json', (err, data) => {
//  if (err) throw err;
//  let student = JSON.parse(data);
//  console.log(student);
//});
