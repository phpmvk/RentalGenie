const Router = require('express');
const router = Router();

const usersController = require('../controllers/users');

router.post("/agent/register", usersController.register);
router.post("/agent/login", usersController.login);
router.get("/agent/profile", usersController.profile);
router.post("/agent/logout", usersController.logout);

module.exports = router;