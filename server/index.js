const express = require('express')
const app = express();
const cors = require('cors')
const router = require('./router')
const PORT = 3001

app
  .use(cors())
  .use(express.json())
  .use(router)

app.listen(PORT, () => {
  console.log('SERVER up on port ' + PORT)
})
