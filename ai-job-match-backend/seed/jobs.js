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
    location: 'Bangalore',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend Engineer',
    company: 'CodeBase',
    location: 'Hyderabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Innovatech',
    location: 'Pune',
    skills: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Data Scientist',
    company: 'AnalyticsIndia',
    location: 'Bangalore',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas'],
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudSolutions',
    location: 'Chennai',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'UX Designer',
    company: 'DesignHub',
    location: 'Mumbai',
    skills: ['Figma', 'User Research', 'Prototyping', 'UI/UX'],
  },
  {
    title: 'Android Developer',
    company: 'MobileFirst',
    location: 'Gurgaon',
    skills: ['Kotlin', 'Java', 'Android SDK', 'Firebase'],
  },
  {
    title: 'iOS Developer',
    company: 'AppleDev India',
    location: 'Bangalore',
    skills: ['Swift', 'Xcode', 'CocoaTouch', 'Core Data'],
  },
  {
    title: 'Cloud Architect',
    company: 'AzureIndia',
    location: 'Hyderabad',
    skills: ['Azure', 'Microservices', 'Serverless', 'Cloud Security'],
  },
  {
    title: 'AI Engineer',
    company: 'AI Innovations',
    location: 'Bangalore',
    skills: ['Python', 'PyTorch', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Blockchain Developer',
    company: 'CryptoIndia',
    location: 'Mumbai',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
  },
  {
    title: 'QA Automation Engineer',
    company: 'QualityAssure',
    location: 'Pune',
    skills: ['Selenium', 'Java', 'TestNG', 'Jenkins'],
  },
  {
    title: 'Data Engineer',
    company: 'BigData Labs',
    location: 'Bangalore',
    skills: ['Spark', 'Hadoop', 'Python', 'SQL'],
  },
  {
    title: 'Flutter Developer',
    company: 'CrossPlatform Apps',
    location: 'Noida',
    skills: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
  },
  {
    title: 'Java Developer',
    company: 'Enterprise Solutions',
    location: 'Chennai',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'Microservices'],
  },
  {
    title: '.NET Developer',
    company: 'DotNet Labs',
    location: 'Pune',
    skills: ['C#', '.NET Core', 'ASP.NET', 'SQL Server'],
  },
  {
    title: 'Python Developer',
    company: 'PythonIndia',
    location: 'Hyderabad',
    skills: ['Python', 'Django', 'Flask', 'REST APIs'],
  },
  {
    title: 'React Native Developer',
    company: 'MobileTech',
    location: 'Bangalore',
    skills: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
  },
  {
    title: 'Angular Developer',
    company: 'WebFront',
    location: 'Gurgaon',
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
  },
  {
    title: 'Vue.js Developer',
    company: 'ModernWeb',
    location: 'Mumbai',
    skills: ['Vue.js', 'JavaScript', 'Vuex', 'Vuetify'],
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'RubyIndia',
    location: 'Bangalore',
    skills: ['Ruby', 'Rails', 'PostgreSQL', 'RSpec'],
  },
  {
    title: 'Go Developer',
    company: 'GoLang Labs',
    location: 'Hyderabad',
    skills: ['Go', 'Gin', 'Microservices', 'Docker'],
  },
  {
    title: 'PHP Developer',
    company: 'WebSolutions',
    location: 'Delhi',
    skills: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    title: 'WordPress Developer',
    company: 'CMS Experts',
    location: 'Ahmedabad',
    skills: ['WordPress', 'PHP', 'CSS', 'Elementor'],
  },
  {
    title: 'Shopify Developer',
    company: 'EcomStore',
    location: 'Jaipur',
    skills: ['Shopify', 'Liquid', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'MERN Stack Developer',
    company: 'FullStack Labs',
    location: 'Bangalore',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'MEAN Stack Developer',
    company: 'MeanStack India',
    location: 'Pune',
    skills: ['MongoDB', 'Express', 'Angular', 'Node.js'],
  },
  {
    title: 'Big Data Engineer',
    company: 'DataScale',
    location: 'Hyderabad',
    skills: ['Hadoop', 'Spark', 'Kafka', 'Hive'],
  },
  {
    title: 'Data Analyst',
    company: 'AnalyticsPro',
    location: 'Bangalore',
    skills: ['SQL', 'Python', 'Tableau', 'Excel'],
  },
  {
    title: 'Business Analyst',
    company: 'TechConsulting',
    location: 'Mumbai',
    skills: ['SQL', 'Power BI', 'Requirements Gathering', 'Agile'],
  },
  {
    title: 'Technical Writer',
    company: 'DevDocs',
    location: 'Remote (India)',
    skills: ['Technical Writing', 'Markdown', 'Git', 'API Documentation'],
  },
  {
    title: 'SEO Specialist',
    company: 'DigitalMarketing Pro',
    location: 'Delhi',
    skills: ['SEO', 'Google Analytics', 'Keyword Research', 'Content Strategy'],
  },
  {
    title: 'Content Writer',
    company: 'ContentStudio',
    location: 'Remote (India)',
    skills: ['Content Writing', 'SEO', 'Research', 'Blogging'],
  },
  {
    title: 'Digital Marketing Manager',
    company: 'MarketGrow',
    location: 'Mumbai',
    skills: ['SEO', 'SEM', 'Social Media', 'Google Ads'],
  },
  {
    title: 'Product Manager',
    company: 'ProductLabs',
    location: 'Bangalore',
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Market Research'],
  },
  {
    title: 'Project Manager',
    company: 'TechSolutions',
    location: 'Pune',
    skills: ['Agile', 'Scrum', 'JIRA', 'Risk Management'],
  },
  {
    title: 'Scrum Master',
    company: 'AgileIndia',
    location: 'Hyderabad',
    skills: ['Scrum', 'Agile', 'JIRA', 'Confluence'],
  },
  {
    title: 'System Administrator',
    company: 'ITInfra',
    location: 'Chennai',
    skills: ['Linux', 'Windows Server', 'Networking', 'Bash'],
  },
  {
    title: 'Network Engineer',
    company: 'NetSolutions',
    location: 'Bangalore',
    skills: ['CCNA', 'Routing', 'Switching', 'Firewalls'],
  },
  {
    title: 'Database Administrator',
    company: 'DataSystems',
    location: 'Pune',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Database Optimization'],
  },
  {
    title: 'MongoDB Developer',
    company: 'NoSQL India',
    location: 'Hyderabad',
    skills: ['MongoDB', 'NoSQL', 'Aggregation', 'Indexing'],
  },
  {
    title: 'Redis Developer',
    company: 'CacheTech',
    location: 'Bangalore',
    skills: ['Redis', 'Caching', 'Pub/Sub', 'Data Structures'],
  },
  {
    title: 'Elasticsearch Engineer',
    company: 'SearchTech',
    location: 'Gurgaon',
    skills: ['Elasticsearch', 'Logstash', 'Kibana', 'Search Algorithms'],
  },
  {
    title: 'Kafka Developer',
    company: 'EventStreams',
    location: 'Bangalore',
    skills: ['Kafka', 'Event Streaming', 'Zookeeper', 'Distributed Systems'],
  },
  {
    title: 'Docker Specialist',
    company: 'ContainerTech',
    location: 'Pune',
    skills: ['Docker', 'Containerization', 'CI/CD', 'Microservices'],
  },
  {
    title: 'Kubernetes Engineer',
    company: 'CloudNative',
    location: 'Hyderabad',
    skills: ['Kubernetes', 'Helm', 'Docker', 'Cloud Native'],
  },
  {
    title: 'AWS Solutions Architect',
    company: 'CloudIndia',
    location: 'Bangalore',
    skills: ['AWS', 'CloudFormation', 'Lambda', 'EC2'],
  },
  {
    title: 'Azure Cloud Engineer',
    company: 'Microsoft India',
    location: 'Hyderabad',
    skills: ['Azure', 'ARM Templates', 'Functions', 'Cosmos DB'],
  },
  {
    title: 'GCP Engineer',
    company: 'Google Cloud India',
    location: 'Bangalore',
    skills: ['GCP', 'BigQuery', 'Cloud Functions', 'Pub/Sub'],
  },
  {
    title: 'Salesforce Developer',
    company: 'CRM Solutions',
    location: 'Mumbai',
    skills: ['Salesforce', 'Apex', 'Lightning', 'SOQL'],
  },
  {
    title: 'SAP Consultant',
    company: 'EnterpriseERP',
    location: 'Gurgaon',
    skills: ['SAP', 'ABAP', 'FI/CO', 'MM'],
  },
  {
    title: 'Oracle Developer',
    company: 'DatabasePro',
    location: 'Bangalore',
    skills: ['Oracle', 'PL/SQL', 'Forms', 'Reports'],
  },
  {
    title: 'Mainframe Developer',
    company: 'LegacySystems',
    location: 'Chennai',
    skills: ['COBOL', 'JCL', 'DB2', 'CICS'],
  },
  {
    title: 'Embedded Systems Engineer',
    company: 'IoT India',
    location: 'Bangalore',
    skills: ['C', 'C++', 'RTOS', 'Microcontrollers'],
  },
  {
    title: 'Game Developer',
    company: 'Gaming Studios',
    location: 'Pune',
    skills: ['Unity', 'C#', '3D Modeling', 'Game Physics'],
  },
  {
    title: 'AR/VR Developer',
    company: 'Immersive Tech',
    location: 'Hyderabad',
    skills: ['Unity', 'Unreal Engine', '3D Modeling', 'ARCore/ARKit'],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'VisionAI',
    location: 'Bangalore',
    skills: ['OpenCV', 'Python', 'Deep Learning', 'Image Processing'],
  },
  {
    title: 'NLP Engineer',
    company: 'LanguageTech',
    location: 'Mumbai',
    skills: ['NLP', 'Python', 'Transformers', 'BERT'],
  },
  {
    title: 'Robotics Engineer',
    company: 'Robotica',
    location: 'Chennai',
    skills: ['ROS', 'Python', 'CAD', 'Control Systems'],
  }
];

  await Job.insertMany(jobs);
  console.log('Jobs seeded');
  process.exit();
};

seedJobs();
