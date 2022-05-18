const express = require('express');
const router = express.Router();
const controller = require('../controllers/drake');

router.get('/sign-in', controller.signIn)

router.post('/sign-in', controller.getUser)

module.exports = router;