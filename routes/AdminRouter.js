
const router = require("express").Router();
const Authentication = require("../middleware/Authentication");
const AdminController = require("../controllers/AdminController");

router.get('/get_total_users' , Authentication, AdminController.getTotalUsers);
router.get("/get_total_posts", Authentication, AdminController.getTotalPosts);
router.get("/get_total_comments", Authentication, AdminController.getTotalComments);
router.get("/get_total_likes", Authentication, AdminController.getTotalLikes);
router.get("/get_total_spam_posts", Authentication, AdminController.getTotalSpamPosts);
router.get("/get_spam_posts", Authentication, AdminController.getSpamPosts);
router.delete("/delete_spam_posts/:id", Authentication, AdminController.deleteSpamPost);


module.exports = router;