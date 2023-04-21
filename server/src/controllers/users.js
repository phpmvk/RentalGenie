const User = require('../models/user')

const register = async (req,res) => {
  try {
    const credential = req.body.credentials;
    const payload = await verifyCredential(credential)

    if (payload) {
      console.log('Payload exists! Here it is:')
      console.log(payload)

      const user = await User.findOne({ googleId: payload.sub })

      if (user) {
        // User already exists, return error
        res.status(400).json({ error: 'User already exists' })
      } else {
        // Create new user
        const newUser = new User({
          googleId: payload.sub,
          name: payload.name,
          email: payload.email
        })
        // await newUser.save();
        await User.create(newUser)

        // Generate token and send to frontend
        const token = generateToken(newUser);
        oauth2Client.setCredentials(tokens)
        res.status(200).json({ token: token })
      }
    } else {
      // Authentication failed!
      res.status(401).json({ error: 'Invalid Credentials' })
    }
  } catch (e) {
    // Handle error
  }
}

const login = async (req,res) => {
  try {
    const credential = req.body.credentials;
    const payload = await verifyCredential(credential)

    if (payload) {

      console.log(payload)
      //find user
      const user = await User.findOne({ googleId: payload.sub })
      console.log('This is user: ')
      console.log(user)
      if (!user) {
        res.status(401).json({ error: 'Invalid Credentials' })
      } else {
        //generate token to send to frontend
        console.log('here is the token: ')
        const token = generateToken(user);
        console.log(token)
        //send token
        res.status(200).json({ token: token })
      }
    } else {
      //authentication failed!
      res.status(401).json({ error: 'Invalid Credentials' })
    }
  } catch (e) {
    res.status(500).json({ error: 'Error logging in'})
  }
}

async function verifyCredential(credential) {
  try {
    
    //verify credential and extract the payload
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CALENDAR_API_CLIENT_ID
    })
    console.log(ticket)
    const payload = ticket.getPayload();
    const userid = payload['sub']

    //return payload
    return payload
  } catch (err) {
    console.error(err)
    return null
  }
}

const generateToken = async (user) => {
  const scopes = [
    'https://www.googleapis.com/auth/calendar.events'
  ]
  const url = await oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    state: JSON.stringify({ user })
  })
  return url;
}

const profile = () => {
  try {

  } catch (e) {
    
  }
}

const logout = (req, res) => {
  try {
    console.log(req.body)
    console.log(req.headers)
  } catch (e) {
    
  }
}

module.exports = {
  register,
  login,
  profile,
  logout,
  // generateAUthUrl,
  // callbackUrl
}


//deprecated by me

// const { google } = require('googleapis')
// const { OAuth2 } = google.auth
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(process.env.GOOGLE_CALENDAR_API_CLIENT_ID);

// const oAuth2Client = new OAuth2(
//   process.env.GOOGLE_CALENDAR_API_CLIENT_ID,
//   process.env.GOOGLE_CALENDAR_API_CLIENT_SECRET,
//   process.env.GOOGLE_CALENDAR_API_REDIRECT_URI,
// )

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CALENDAR_API_CLIENT_ID,
//   process.env.GOOGLE_CALENDAR_API_CLIENT_SECRET,
//   process.env.GOOGLE_CALENDAR_API_REDIRECT_URI,
// )

// console.log(process.env.GOOGLE_CALENDAR_API_REDIRECT_URI)
// // Route handler for initiating the OAuth 2.0 authorization flow
// const generateAUthUrl = (req, res) => {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: ['https://www.googleapis.com/auth/calendar'],
//   });
//   console.log('authURL')
//   console.log(authUrl)
//   res.json({redirect: authUrl});
// };

// // Route handler for handling the OAuth 2.0 callback after the user grants authorization
// const callbackUrl = async (req, res) => {
//   console.log('heyheyheyhy')
//   const { code } = req.query;
//   const { tokens } = await oAuth2Client.getToken(code);
//   console.log(tokens)
//   oAuth2Client.setCredentials(tokens);
//   res.send(tokens)
//   // Use the tokens to make requests to the Google Calendar API
// };
