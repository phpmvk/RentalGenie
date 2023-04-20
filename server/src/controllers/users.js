const { google } = require('googleapis')
const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CALENDAR_API_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_API_CLIENT_SECRET
)

const register = () => {
  try {

  } catch (e) {
    
  }
}

const login = async (req,res) => {
  try {
    const credential = req.body.credentials;
    const payload = await verifyCredential(credential)

    if (payload) {

      console.log(payload)
      //find user
      // const user = await User.findOne({ googleId: payload.sub })
      //generate token to send to frontend
      // const token = generateToken(user);
      //send token
      // res.status(200).json({ token: token })
      res.status(200).json({token: 123})
    } else {
      //authentication failed!
      res.status(401).json({ error: 'Invalid Credentials' })
    }


    // console.log(req.body)
    // console.log('yessssss')
    // res.status(200).json({message: 'hey there yo'})
  } catch (e) {
    
  }
}


async function verifyCredential(credential) {
  try {
    //verify credential and extract the payload
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CALENDAR_API_CLIENT_ID
    })
    const payload = ticket.getPayload();

    //return payload
    return payload
  } catch (err) {
    console.error(err)
    return null
  }
}






const profile = () => {
  try {

  } catch (e) {
    
  }
}

const logout = () => {
  try {

  } catch (e) {
    
  }
}

module.exports = {
  register,
  login,
  profile,
  logout,
}