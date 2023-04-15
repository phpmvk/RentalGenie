const listingModel = require('../models/index');

const addListing = async (req, res) => {
  try {
    console.log('POST LISTING received')
    const newListing = req.body;
    const savedListing = await listingModel.postListing(newListing)
    res.status(201).json(savedListing)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error adding listing to DB!')
  }
}

const getAllListings = async (req, res) => {
  try {
    console.log('GET request for all listings received')
    const allListings = await listingModel.getAllListings();
    res.status(200).json(allListings)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error getting all listings from DB!')
  }
}

const getAllListingsByAgencyId = async (req, res) => {
  try {
    console.log('GET request for all listings by agency ID received')
    const agencyId = req.params.id
    const allAgencyListings = await listingModel.getListingsByAgencyId(agencyId)
    res.status(200).json(allAgencyListings)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error getting all listings by ID from DB!')
  }
}

module.exports = {
  addListing,
  getAllListings,
  getAllListingsByAgencyId
}