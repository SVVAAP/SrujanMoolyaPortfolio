const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 9080;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/api/students', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).send('Error fetching students');
      return;
    }
    res.json(results);
  });
});

app.post('/api/students', (req, res) => {
  const { firstName, lastName, email, age, grade, address } = req.body;
  const query = 'INSERT INTO users (first_name, last_name, email, age, grade, address) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, age, grade, address], (err, result) => {
    if (err) {
      console.error('Error adding student:', err);
      res.status(500).send('Error adding student');
      return;
    }
    res.json({ id: result.insertId, firstName, lastName, email, age, grade, address });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});