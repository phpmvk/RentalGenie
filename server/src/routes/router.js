const Router = require('express')
const router = Router();

const chatController = require('../controllers/messages')
const listingController = require('../controllers/listings')

router.post("/userMessage/:listingId", chatController.addUserMessage);
router.post("/add-listing", listingController.addListing);
router.get("/all-listings", listingController.getAllListings);
router.get("/all-listings/:id", listingController.getAllListingsByAgencyId)

module.exports = router;