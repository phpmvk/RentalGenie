require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const router = require('./routes/router')
const PORT = process.env.PORT || 3002

app
  .use(cors())
  .use(express.json())
  .use(router)

app.listen(PORT, () => {
  console.log('SERVER up on port ' + PORT)
})


// GOOGLE_CALENDAR_API_CLIENT_ID=68368533204-6nf85vp7hl6hom9m0fj1f8t6d83uicr0.apps.googleusercontent.com
// GOOGLE_CALENDAR_API_CLIENT_SECRET=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
// OPENAI_API_KEY=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
// PORT=3001