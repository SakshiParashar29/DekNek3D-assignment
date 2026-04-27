const express = require('express');
const router = express.Router();
const {signUp, login, dashboard} = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');


router.post('/signup', signUp);
router.post('/login', login);

router.get('/dashboard', authMiddleware, dashboard);


module.exports = router;

