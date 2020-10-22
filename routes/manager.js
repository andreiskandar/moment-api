const express = require('express');
const router = express.Router();

module.exports = router
  .get('/', (req, res) => {
    const employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@test.com',
        password: 'password',
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Doe',
        email: 'test2@test.com',
        password: 'password',
      },
    ]
    res.status(200).json(employees)
  })
