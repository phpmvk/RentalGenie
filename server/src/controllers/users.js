

const register = () => {
  try {

  } catch (e) {
    
  }
}

const login = (req,res) => {
  try {
    // console.log(req.headers)
    // console.log(req.method)
    console.log(req.body)
    console.log('yessssss')
    res.status(200).json({message: 'hey there yo'})
  } catch (e) {
    
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