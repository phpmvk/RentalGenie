# Server

## Installation

To set up and run the server component of RentalGenie, follow these steps:

1. Navigate to the server directory:
  ```console
  cd RentalGenie/server
  ```

2. Install npm packages:
  ```console
  npm install
  ```

3. Set up environment variables:
- Copy the *'example.env'* file to a new file called *'.env'*:
  ```console
  cp .env.example .env
  ```
- Replace the placeholder values in *'.env'* with your own values.
Add the required environment variables in the .env file located in the server directory. Configure variables such as the port, database connection, and any other necessary configurations.

4. Start the server:
  ```console
  npm run start
  ```

## MongoDB Requirement
Please ensure that you have MongoDB installed and set up before running the server. If you haven't installed MongoDB, you can visit the [MongoDB Download Center](https://www.mongodb.com/try/download/community) to download and install the appropriate version for your operating system. Make sure MongoDB is running and accessible with the proper configuration specified in the .env file.

## Database Seeding

To seed the local MongoDB database with sample data, follow these steps:

1. Ensure that you have MongoDB installed and running locally.

2. Run the data seeding script:
  ```console
  npm run seed
  ```
  
This script will connect to the local MongoDB database and insert the sample data into the respective collections.

Note: Make sure to review and modify the seed.js file according to your specific data seeding requirements.
  
4. Once the seeding process is complete, you can start the server as usual:

  ```console
  cd ..
  npm start
  ```

## Tech Stack
The server component of RentalGenie utilizes the following technologies:

<br>
<span style="display:flex; flex-direction:column;justify-content:center; align-items:center; flex-wrap:wrap;">
  <a href="https://nodejs.org/en"><img src="https://nodejs.org/static/images/logo.svg"  width="200" height="70"></a>
  <br>
  <a href="https://expressjs.com/"><img src="https://expressjs.com/images/express-facebook-share.png"  width="200" height="70"></a>
  <br>
  <a href="https://www.mongodb.com/"><img src="https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png"  width="200" height="100"></a>
  <br>
  <a href="https://mongoosejs.com/"><img src="https://miro.medium.com/v2/resize:fit:648/1*iDvsmUwzZQxJSKdL0xzwIA.png"  width="200" height="70"></a>
  <br>
  <a href="https://platform.openai.com/"><img src="https://venturebeat.com/wp-content/uploads/2019/03/openai-1.png?fit=2400%2C1000&strip=all"  width="200" height="80"></a>
</span>