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

exports.getListingPublicById = (id) => publicListings.findOne({ _id: new ObjectId(id)});
exports.getAllListingsPublic = () => publicListings.find().toArray();
exports.getListingsPublicByAgencyId = (id) => publicListings.find({ agency_id: id}).toArray();

exports.getListingPrivateByListingId = (id) => privateListings.findOne({ _id: new ObjectId(id) });
