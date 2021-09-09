const express = require('express');
const router = express.Router();

// get user lists
router.get('/list', function (req, res) {
  let sql = `SELECT * FROM users`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data: data,
      message: "User lists retrieved successfully"
    })
  })
});

// create new user
router.post('/new', function (req, res) {
  let sql = `INSERT INTO users(name, email) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.email
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully",
      data: data
    })
  })
});

// delete new user
router.delete('/:id', function (req, res) {
  let UserId = req.params.id;
  let sql = `DELETE FROM users WHERE id = ?`;

  db.query(sql, UserId, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "User deleted successfully"
    })
  })
});

// update user exist
router.patch('/:id', function (req, res) {
  let UserId = req.params.id;
  let sql = `UPDATE users SET name = ?,email = ? WHERE id = ?`;
  let values = [
    req.body.name,
    req.body.email,
    UserId
  ];

  db.query(sql, [...values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "User lists retrieved successfully " + data.affectedRows + " record(s) updated"
    })
  })
});

module.exports = router;