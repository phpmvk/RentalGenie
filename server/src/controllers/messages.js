const openai = require('../services/openai')
const listingsModel = require('../models/index')

const db = {
  messages: []
}

async function addUserMessage(req, res) {
  try {
    console.log('GET received')
    const listing_id = req.params.listingId;
    // console.log('this is the req.query.listingID',listing_id)
    const listingInfo = await listingsModel.getListingPrivateByListingId(listing_id)
    // console.log('this is the listing info: ', listingInfo)
    const frontEndConversation = req.body;
    // console.log(req.body)
    const convertedConvo = convertToOpenAiPromptFormat(frontEndConversation)

    const newMessage = {role: "user", content: req.body};
    await db.messages.push(newMessage)
    let response = await openai.chatComplete(convertedConvo, listingInfo);
    // console.log(db.messages)
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

function convertToOpenAiPromptFormat(input) {
  let output = []
  input.forEach(el => {
    if (el.isFromUser === false) {
      output.push({ role: "assistant", content: el.content})
    } else {
      output.push({ role: "user", content: el.content})
    }
  })
  console.log('converter function output:')
  console.log(output)
  return output
}


module.exports = { 
  addUserMessage
}