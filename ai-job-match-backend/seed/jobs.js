const mongoose = require('mongoose');
const Job = require('../models/Jobs');
require('dotenv').config();

const seedJobs = async () => {
  await mongoose.connect(process.env.MONGODB_URL);

  await Job.deleteMany(); // clear existing jobs

  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Backend Engineer',
      company: 'CodeBase',
      location: 'Bangalore',
      skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Innovatech',
      location: 'Mumbai',
      skills: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  await Job.insertMany(jobs);
  console.log('Jobs seeded');
  process.exit();
};

seedJobs();
