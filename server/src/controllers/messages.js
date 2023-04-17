const openai = require('../services/openai')

const db = {
  messages: []
}

async function addUserMessage(req, res) {
  try {
    console.log('GET received')
    console.log('this is the listing ID >>>>>>>', req.params.listingId)
    const messages = await db.messages;
    const newMessage = {role: "user", content: req.body.content};
    await db.messages.push(newMessage)
    let response = await openai.chatComplete(db.messages);
    if (response === undefined) response = '';
    const status = response.split('****** STATUS ')
    console.log('THIS IS STATUS', status)
    if (status.length > 1) {
      if (status[1] === 'denied.' || status[1] === 'denied') {
        console.log('USER Denied')
        res.status(201).json(status[0])
        return
      } else {
        console.log('USER APPROVED, NOW MOVE ONTO SCHEDULING')
        mockGoogleCalendar(status[1])
        res.status(201).json(status[0])
        return
      }
    }
    db.messages.push({role: "assistant", content: response})
    res.status(201).json(response)
    // console.log('HERE IS THE CURRENT DB', db.messages)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error adding user message')
  }
}

function mockGoogleCalendar(dateAsString) {
  console.log('This will be sent to GoogleAPI >>>>', dateAsString)
}

module.exports = { 
  addUserMessage
}