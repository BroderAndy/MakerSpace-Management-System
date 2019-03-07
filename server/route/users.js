const express = require('express');
const passportConfig = require('../passport.config');
const RouteValidator = require('../utils/route.validator');
const UsersController = require('../controller/user.controller');

const router = express.Router();

router.post('/signup', RouteValidator.signUp, UsersController.signUp);
router.post('/signin', RouteValidator.signIn, passportConfig.authenticate('local'), (req, res) => {
    return res.status(200).send({ msg: 'Authentication successful' });
});

module.exports = router;
