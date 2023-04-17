const { MongoClient, ObjectId } = require('mongodb');
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

const publicListings = client.db('RentalGenie').collection('listings_public');
const privateListings = client.db('RentalGenie').collection('listings_private')

exports.postListingPublic = (newListingPublic) => publicListings.insertOne(newListingPublic);
exports.postListingPrivate = (newListingPrivate) => privateListings.insertOne(newListingPrivate)

exports.getAllListings = () => publicListings.find().toArray();

exports.getListingsByAgencyId = (id) => publicListings.find({ agency_id: id}).toArray();

exports.getPrivateListingByListingId = (id) => privateListings.findOne({ _id: new ObjectId(id) });
