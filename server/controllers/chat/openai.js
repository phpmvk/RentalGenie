const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  // apiKey: "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"
  apiKey: "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"
})
const openai = new OpenAIApi(config)

async function chatComplete(messages) {
  try {
    const res = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0
    })
    return res.data.choices[0].message.content
  } catch (e) {
    console.error(e)
  }
}


module.exports = {
  chatComplete
}