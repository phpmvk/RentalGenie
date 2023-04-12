const openai = require('./openai')
const listing = require('../../models/listing')

const db = {
  messages: [
    { "role": "user", "content": "I will provide information for a listing. Your role is to assess whether I qualify for the listing or not. If I meet 3 out of the 4 requirements, you will consider that I qualify for a viewing. From there, suggest to me the available viewing times based on the information in the listing, and help me schedule a 20-minute event inside those specific times. Once the event has been decided, finalize your response with '***** STATUS scheduled'. If I do not qualify, finalize your response with '****** STATUS denied'." },
    { "role": "system", "content": `Ok. The 4 main criteria I will check are: minimum gross annual income, minimum age, whether you have pets, whether you smoke, and based on that I will determine if you qualify.`},
    { "role": "user", "content": "Let's begin after this message. Ask questions one by one, and try to make the conversation succinct. Here is the listing information: " + JSON.stringify(listing)},
  ]
}


//"Hello. I will provide my details to compare the listing requirements with, but you should ask me questions to get the answers. Try to make the conversation succinct. If I meet the criteria, respond with '****** YES' at the end of the message. If not, respond with '***** NO' at the end of the message"
//    Sure! The requirements are Age: minimum 18, Min Income: 30000/year. The pets policy is: pets allowed, and the smokers policy is no smokers

async function addUserMessage(req, res) {
  try {
    console.log('GET received')
    const messages = await db.messages;
    const newMessage = {role: "user", content: req.body.content};
    console.log(newMessage);
    await db.messages.push(newMessage)
    const response = await openai.chatComplete(db.messages);
    console.log(response)
    db.messages.push({role: "system", content: response})
    res.status(201).json(response)
    console.log('HERE IS THE CURRENT DB', db.messages)
  } catch (e) {
    console.error(e)
    res.status(500).json('Error adding user message')
  }
}



module.exports = { 
  addUserMessage
}