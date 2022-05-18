const express = require('express')
const router = express.Router()

const control = require('../controllers/drake')

router.get('/', control.selectUser)

module.exports = router