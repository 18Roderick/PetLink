const router = require('express').Router();
const { isAuthenticated } = require('../middleware/isAuthenticated');

router.use(isAuthenticated);

module.exports = router;
