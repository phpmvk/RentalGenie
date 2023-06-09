const { PublicListing, PrivateListing } = require('../models/listing')

const addListing = async (req, res) => {
  try {
    console.log('POST LISTING received')
    const newListing = req.body;
    const public = {
      size: newListing.size,
      bedrooms: newListing.bedrooms,
      bathrooms: newListing.bathrooms,
      description: newListing.description,
      header: newListing.header,
      rent_amount: newListing.rent_amount,
      available: true,
      images: newListing.images,
      district: newListing.district,
      city: newListing.city,
      furnished: newListing.furnished,
      pets_allowed: newListing.pets_allowed,
      parking_spots: newListing.parking_spots,
      floor: newListing.floor,
      close_to_public_transport: newListing.close_to_public_transport,
    }
    const savedPublicListing = await PublicListing.create(public)
    const private = {
      _id: savedPublicListing._id,
      address: newListing.address,
      post_code: newListing.post_code,
      owner_name: newListing.owner_name,
      owner_contact: newListing.owner_contact,
      tenant_requirements: newListing.tenant_requirements,
      agency_id: newListing.agency_id,
      showing_weekdays: newListing.showing_weekdays,
      showing_hours: newListing.showing_hours,
    }
    await PrivateListing.create(private)
    res.status(201).json(savedPublicListing)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error adding listing to DB!')
  }
}

const getAllListings = async (req, res) => {
  try {
    console.log('GET request for all listings received')
    const allListings = await PublicListing.find();
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
    const listing = await PublicListing.findById(id);
    res.status(200).json(listing)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error getting specific listing from DB!')
  }
}

const getAllListingsByAgencyId = async (req, res) => {
  try {
    console.log('GET request for all listings by agency ID received');
    const agencyId = req.params.id;
    const allAgencyListings = await PrivateListing.find({ agency_id: agencyId });
    const allPublicListings = await PublicListing.find();

    const combinedListingData = allAgencyListings.map(privateInfo => {
      const publicInfo = allPublicListings.find(el => el._id.equals(privateInfo._id));
      return {
        privateInfo,
        publicInfo,
      }
    });
    res.status(200).json(combinedListingData);
  } catch (e) {
    console.error(e);
    res.status(500).json('Error getting all agency listings by ID from DB!');
  }
}

module.exports = {
  addListing,
  getAllListings,
  getListingById,
  getAllListingsByAgencyId
}