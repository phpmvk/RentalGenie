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
  images: {
    type: [String],
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  furnished: {
    type: Boolean,
    required: true,
  },
  pets_allowed: {
    type: Boolean,
    required: true,
  },
  parking_spots: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  close_to_public_transport: {
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