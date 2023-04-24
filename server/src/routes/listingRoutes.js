const Router = require('express');
const router = Router();

const listingController = require('../controllers/listings');

router.post("/add-listing", listingController.addListing);
router.get("/all-listings", listingController.getAllListings);
router.get("/all-listings/:id", listingController.getAllListingsByAgencyId)
router.get("/listing/:id", listingController.getListingById)

module.exports = router;