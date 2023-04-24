const Router = require('express');
const router = Router();

const eventsController = require('../controllers/events');

router.get("/agent/calendar/all", eventsController.getAllEvents);
router.post("/agent/calendar/insert-event", eventsController.addEvent);

module.exports = router;