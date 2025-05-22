const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const testOpenAI = async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello, world!' }],
    });
    console.log('API works!', response.data);
  } catch (error) {
    console.error('API Error:', error.message);
  }
};

testOpenAI();