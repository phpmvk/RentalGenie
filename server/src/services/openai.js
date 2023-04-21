const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

async function chatComplete(messages, listingInfo) {
  const eventFormat = {
    title: "name + phone number of candidate",
    description: "owner_contact",
    start: "2023-04-24T10:30:00",
    end: "2023-04-24T10:50:00",
    color: "blue",
    agency_id: "agency_id",
    listing_id: "listing_id"
  }
  const initialPrompt = [
    { "role": "system", "content": `You are a kind assistant that assesses if a user meets listing critera. And the main goal is to classify if the user is qualified or not to schedule a viewing. Never reveal what the requirements for the listing are, just ask the user for their information. You keep the conversation short. You do not share listing information. The main criteria are listed in the listing info as requirements. You should not ask for all the criterias at once but make is as conversation where you can ask per message a max of 2 requirements.  Based on the requirements if the user meets more than half of them, you will classify the user as qualified for a viewing and from there, suggest to the user the available viewing times based on the information in the listing, and help the user schedule a 20-minute event inside those specific times. If the user agrees to schedule a viewing time accordingly to the available times, ask for the users phone number and name. Once you have all this information, you will respond to the user confirming that the viewing has been scheduled, but at the end of your answer you must add the following: '****** STATUS ' + the details and listing info in the following format: ${JSON.stringify(eventFormat)}. You can use this date as reference ${new Date()} to calculate when the viewing will happen. In case the user is classified as not qualified for a viewing you will answer the user but add in the end of your response '****** STATUS denied'. This is the listing info: ${JSON.stringify(listingInfo)} and the way that the showing_weekdays vs showing_hours work are that all those hours are available for all weekdays mentioned in the showing_weekdays.`}
  ]
  const fullPrompt = [...initialPrompt, ...messages]
  try {
    const res = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: fullPrompt,
      temperature: 0
    })
    return res.data.choices[0].message.content
  } catch (e) {
    console.error(e.response.statusText, e.response.status)
  }
}

module.exports = {
  chatComplete
}