const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017')

async function connect() {
  try {
    await client.connect();
    console.log('DB Connected!')
  } catch (e) {
    console.log(e)
  }
}
connect();

const listings = client.db('RentalGenie').collection('listings');

exports.postListing = (newListing) => listings.insertOne(newListing);

exports.getAllListings = () => listings.find().toArray();

exports.getListingsByAgencyId = (id) => listings.find({ agency_id: id}).toArray();
