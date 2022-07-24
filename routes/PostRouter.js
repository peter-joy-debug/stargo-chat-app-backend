const router = require("express").Router();
const Authentication = require("../middleware/Authentication");
const PostController = require("../controllers/PostController");

router.route("/posts")
  .post(Authentication, PostController.createPost)
  .get(Authentication, PostController.getPosts);

router.route("/post/:id")
  .patch(Authentication, PostController.updatePost)
  .get(Authentication, PostController.getPost)
  .delete(Authentication, PostController.deletePost);

router.patch("/post/:id/like", Authentication, PostController.likePost);
router.patch("/post/:id/unlike", Authentication, PostController.unLikePost);

router.patch("/post/:id/report", Authentication, PostController.reportPost);

router.get("/user_posts/:id", Authentication, PostController.getUserPosts);

router.get("/post_discover", Authentication, PostController.getPostDiscover);

router.patch("/savePost/:id", Authentication, PostController.savePost);
router.patch("/unSavePost/:id", Authentication, PostController.unSavePost);
router.get("/getSavePosts", Authentication, PostController.getSavePost);




module.exports = router;