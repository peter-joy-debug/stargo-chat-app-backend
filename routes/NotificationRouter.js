const router = require('express').Router();
const Authentication = require('../middleware/Authentication');
const NotificationRouter = require('../controllers/NotificationController');


router.post('/notify', Authentication, NotificationRouter.createNotify);

router.delete('/notify/:id', Authentication, NotificationRouter.removeNotify);

router.get("/notifies", Authentication, NotificationRouter.getNotifies);

router.patch("/isReadNotify/:id", Authentication, NotificationRouter.isReadNotify);

router.delete("/deleteAllNotify", Authentication, NotificationRouter.deleteAllNotifies);


module.exports = router;