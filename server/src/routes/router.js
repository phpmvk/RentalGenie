const Router = require('express')
const router = Router();

const chatController = require('../controllers/messages')
const listingController = require('../controllers/listings')
const usersController = require('../controllers/users')

//chat messages route
router.post("/userMessage/:listingId", chatController.addUserMessage);

//listing routes
router.post("/add-listing", listingController.addListing);
router.get("/all-listings", listingController.getAllListings);
router.get("/all-listings/:id", listingController.getAllListingsByAgencyId)
router.get("/listing/:id", listingController.getListingById)

//user routes
router.post("/agent/register", usersController.register)
router.post("/agent/login", usersController.login)
router.get("/agent/profile", usersController.profile)
router.post("/agent/logout", usersController.logout)


//deprecated by me
// router.get("/auth/google/callback", usersController.callbackUrl)
// router.get("/auth/google", usersController.generateAUthUrl)

module.exports = router;