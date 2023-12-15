const router = require('express').Router();
const { getUser } = require('../controllers');

router.get('/user/:id', getUser);

module.exports = router;
