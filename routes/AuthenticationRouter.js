const router = require('express').Router();
const AuthenticationController = require('../controllers/AuthenticationController');
const Authentication = require('../middleware/Authentication');


router.post('/register', AuthenticationController.register);
router.post("/register_admin", AuthenticationController.registerAdmin);
router.post("/changePassword", Authentication,  AuthenticationController.changePassword);


router.post("/login", AuthenticationController.login);
router.post("/admin_login", AuthenticationController.adminLogin);


router.post("/logout", AuthenticationController.logout);


router.post("/refresh_token", AuthenticationController.generateAccessToken);


module.exports = router;