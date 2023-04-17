const listingModel = require('../models/index');

const addListing = async (req, res) => {
  try {
    console.log('POST LISTING received')
    const newListing = req.body;
    const public = {
      size: newListing.size,
      bedrooms: newListing.bedrooms,
      bathrooms: newListing.bathrooms,
      description: newListing.description,
      rent_amount: newListing.rent_amount,
      available: true,
    }
    const savedListing = await listingModel.postListingPublic(public)
    const private = {
      _id: savedListing.insertedId,
      address: newListing.address,
      post_code: newListing.post_code,
      owner_name: newListing.owner_name,
      owner_contact: newListing.owner_contact,
      tenant_requirements: newListing.tenant_requirements,
      agency_id: newListing.agency_id,
      showing_weekdays: newListing.showing_weekdays,
      showing_hours: newListing.showing_hours,
    }
    const privateListing = await listingModel.postListingPrivate(private)
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

const getListingById = async (req, res) => {
  try {
    console.log('GET request for specific listing received')
    const id = req.params.id;
    const listing = await listingModel.getListingById(id);
    res.status(200).json(listing)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error getting specific listing from DB!')
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
  getListingById,
  getAllListingsByAgencyId
}