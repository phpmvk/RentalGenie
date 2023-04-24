require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const cookieParser = require('cookie-parser')
const chatRouter = require('./routes/chatRoutes');
const listingRouter = require('./routes/listingRoutes');
const userRouter = require('./routes/userRoutes')
const eventRouter = require('./routes/eventRoutes')

app
  .use(cookieParser())
  .use(cors())
  .use(express.json())
  .use(chatRouter)
  .use(listingRouter)
  .use(userRouter)
  .use(eventRouter)
  .all('*', (req, res) => {
    res.status(404).send('Route not found');
  });

app.listen(PORT, () => {
  console.log('SERVER up on port ' + PORT)
});