const openai = require('../services/openai')
const { PublicListing, PrivateListing } = require('../models/listing')
const Event = require('../models/event')

async function addUserMessage(req, res) {
  try {
    console.log('addUserMEssage GET received')
    const listing_id = req.params.listingId;
    const listingInfo = await PrivateListing.findById(listing_id)
    const frontEndConversation = req.body;
    const convertedConvo = convertToOpenAiPromptFormat(frontEndConversation)
    let response = await openai.chatComplete(convertedConvo, listingInfo);
    if (response === undefined) {
      res.status(200).json('Sorry, I had an issue. Please come back in a few minutes and try again :)')
      return
    } 
    const status = response.split('****** STATUS ')
    if (status.length > 1) {
      if (status[1] === 'denied.' || status[1] === 'denied') {
        console.log('USER Denied')
        res.status(201).json(status[0])
        return
      } else {
        console.log('USER APPROVED, NOW MOVE ONTO SCHEDULING')
        eventScheduler(status[1])
        res.status(201).json(status[0])
        return
      }
    }
    res.status(201).json(response)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error adding user message')
  }
}

async function eventScheduler(dateAsString) {
  console.log('Date as String START: ')
  console.log(dateAsString)
  console.log(': END')
  const event = JSON.parse(dateAsString)
  console.log('Parsed START: ')
  console.log(event)
  console.log(': END')
  await Event.create(event)
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
  return output
}


module.exports = { 
  addUserMessage
}