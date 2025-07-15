const express = require('express');
const app = express();
const cors = require('cors');
const {ConnectMongoDB} = require("./connection")
const authRoute = require('./routes/auth')
const profileRoute = require('./routes/profile')
const jobRoute = require('./routes/jobRoute')
const aiRoute = require('./routes/aiRoutes')

require('dotenv').config();

ConnectMongoDB(process.env.MONGODB_URL)

app.use(cors({
  origin: 'http://13.127.1.91:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute)
app.use('/api/jobs',jobRoute)
app.use('/api/ai', aiRoute)

app.get('/',(req,res)=>{
    res.send("Hello from home")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
