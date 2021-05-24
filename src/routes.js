const express = require('express');
const router = express.Router();
const user = require('./controllers/user');

router.post('/test', user.index);

module.exports = router;
