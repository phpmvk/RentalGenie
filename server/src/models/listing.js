const mongoose = require('./index');

const publicListingSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rent_amount: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
})

const privateListingSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  post_code: {
    type: String,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
  owner_contact: {
    type: String,
    required: true,
  },
  tenant_requirements: {
    type: String,
    required: true,
  },
  agency_id: {
    type: String,
    required: true,
  },
  showing_weekdays: {
    type: [String],
    required: true,
  },
  showing_hours: {
    type: String,
    required: true,
  },
})

const PublicListing = mongoose.model('public_listing', publicListingSchema);
const PrivateListing = mongoose.model('private_listing', privateListingSchema)

module.exports = {
  PublicListing,
  PrivateListing,
}

// exports.postListingPublic = (newListingPublic) => PublicListing.create(newListingPublic);
// exports.postListingPrivate = (newListingPrivate) => PrivateListing.create(newListingPrivate)

// exports.getListingPublicById = (id) => PublicListing.findById(id);
// exports.getAllListingsPublic = () => PublicListing.find();
// exports.getListingsPublicByAgencyId = (id) => PublicListing.find({ agency_id: id });

// exports.getListingPrivateByListingId = (id) => PrivateListing.findById(id);
