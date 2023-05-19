const mongoose = require('../src/models/index');
const { PublicListing, PrivateListing } = require('../src/models/listing');
const fs = require('fs');
const path = require('path');

seedData();
async function seedData() {
  try {
    const publicListingsData = fs.readFileSync(path.join(__dirname, 'publicListings.json'), 'utf8');
    const privateListingsData = fs.readFileSync(path.join(__dirname, 'privateListings.json'), 'utf8');

    const publicListings = JSON.parse(publicListingsData);
    const privateListings = JSON.parse(privateListingsData);

    await PublicListing.deleteMany();
    await PrivateListing.deleteMany();

    const insertedPublicListings = await PublicListing.insertMany(publicListings);
    console.log(`${insertedPublicListings.length} public listings inserted into the database.`);

    const insertedPrivateListings = await PrivateListing.insertMany(privateListings);
    console.log(`${insertedPrivateListings.length} private listings inserted into the database.`);

    mongoose.disconnect();
    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}
