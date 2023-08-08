const express = require('express');
const { getUser } = require('../controllers/user')

const router = express.Router();

router.get('/test', getUser)


module.exports = router;