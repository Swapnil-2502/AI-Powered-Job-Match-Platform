const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');
const Job = require('../models/Jobs');
const UserProfile = require('../models/Profile');
const { authMiddleware } = require('../middleware/authMiddleware');
require('dotenv').config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post('/recommend', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await UserProfile.findOne({ user: userId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    const jobs = await Job.find();
    const prompt = generatePrompt(profile, jobs);

    const response = await cohere.chat({
      model: 'command-r', 
      message: prompt, 
      max_tokens: 500,
      temperature: 0.7,
    });

    const responseText = response.text || 'No recommendation generated.';
    res.json({ recommendations: responseText });

  } catch (error) {
    console.error('Cohere API Error:', error.message);
    res.status(500).json({ message: 'AI recommendation failed', error: error.message });
  }
});

function generatePrompt(profile, jobs) {
  const jobList = jobs.map((job, i) => {
    return `${i + 1}. Title: ${job.title}, Company: ${job.company}, Location: ${job.location}, Skills: ${job.skills.join(', ')}`;
  }).join('\n');

  return `
    You are an intelligent job recommendation assistant.

    The user has the following profile:
    - Name: ${profile.name}
    - Location: ${profile.location}
    - Years of Experience: ${profile.experience}
    - Skills: ${profile.skills.join(', ')}
    - Preferred Job Type: ${profile.jobType}

    Based on the list of jobs below, recommend the top 3 most relevant jobs for this user. 
    Only pick jobs that match their skills and job type preference.
    Explain briefly why each job is a good fit.

    Available Jobs:
    ${jobList}

    Respond in this format:
    1. Job Title – Company
    Why it's a good match: ...
    2. ...
    3. ...

    `
}

module.exports = router;
