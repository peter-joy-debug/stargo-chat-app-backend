
const router = require('express').Router();
const Authentication = require('../middleware/Authentication');
const UserController = require('../controllers/UserController');

router.get('/search', Authentication, UserController.searchUser);

router.get('/user/:id', Authentication, UserController.getUser);

router.patch("/user", Authentication, UserController.updateUser);

router.patch("/user/:id/addfolk", Authentication, UserController.addFolks);
router.patch("/user/:id/blockfolk", Authentication, UserController.blockFolk);

router.get("/suggestionsUser", Authentication, UserController.suggestionsUser);



module.exports = router;