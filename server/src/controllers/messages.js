const openai = require('../services/openai')
const listingsModel = require('../models/index')
const { PublicListing, PrivateListing } = require('../models/listing')
const Event = require('../models/event')

async function addUserMessage(req, res) {
  try {
    console.log('addUserMEssage GET received')
    const listing_id = req.params.listingId;
    // console.log('this is the req.query.listingID',listing_id)
    const listingInfo = await PrivateListing.findById(listing_id)
    // console.log('this is the listing info: ', listingInfo)
    const frontEndConversation = req.body;
    // console.log(req.body)
    const convertedConvo = convertToOpenAiPromptFormat(frontEndConversation)
    let response = await openai.chatComplete(convertedConvo, listingInfo);
    if (response === undefined) response = 'Sorry, I had an issue. Please come back in a few minutes and try again :)';
    const status = response.split('****** STATUS ')
    // console.log('THIS IS STATUS', status)
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
  console.log('This was sent to DB >>>', dateAsString)
  const event = JSON.parse(dateAsString)
  console.log(event)
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
  console.log('converter function output:')
  console.log(output)
  return output
}


module.exports = { 
  addUserMessage
}