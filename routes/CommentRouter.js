const router = require("express").Router();
const Authentication = require("../middleware/Authentication");
const CommentController = require("../controllers/CommentController");

router.post('/comment', Authentication, CommentController.createComment);

router.patch('/comment/:id', Authentication, CommentController.updateComment);

router.patch("/comment/:id/like", Authentication, CommentController.likeComment);
router.patch("/comment/:id/unlike", Authentication, CommentController.unLikeComment);
router.delete("/comment/:id", Authentication, CommentController.deleteComment);



  module.exports = router;