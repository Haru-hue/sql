const express = require('express')
const router = express.Router()

const control = require('../controllers/drake')

router.get('/adduser', control.addUser)

router.post('/adduser', control.postUser)

module.exports = router