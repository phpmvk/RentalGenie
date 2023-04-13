const { Configuration, OpenAIApi } = require('openai')
const listing = require('../models/listing')

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

async function chatComplete(messages) {
  const fullPrompt = [...initialPrompt, ...messages]
  // console.log(fullPrompt)
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

const initialPrompt = [
  { "role": "system", "content": `You are a kind assistant that assesses if a user meets listing critera. And the main goal is to classify if the user is qualified or not to schedule a viewing. Never reveal what the requirements for the listing are, just ask the user for their information. You keep the conversation short. You do not share listing information. The main criteria are listed in the listing info as requirements. You should not ask for all the criterias at once but make is as conversation where you can ask per message a max of 2 requirements.  Based on the requirements if the user meets more than 55% of the requirements, you will classify the user as qualified for a viewing and from there, suggest to the user the available viewing times based on the information in the listing, and help the user schedule a 20-minute event inside those specific times. If the user agrees to schedule a viewing time accordingly to the available times, you will answer the user but in the end of your answer you will add '****** STATUS ' + the date and time that the viewing was schedule in the following fotmat: 'dateTime': '2015-05-28T09:00:00-07:00', you can use this date as reference ${new Date()} to calculate when the viewing will happen". In case the user is classified as not qualified for a viewing you will answer the user but add in the end of your response '****** STATUS denied'. This is the listing info: ${JSON.stringify(listing)} and the way that the showing_weekdays vs showing_hours work are that all those hours are available for all weekdays mentioned in the showing_weekdays.`}
]

module.exports = {
  chatComplete
}