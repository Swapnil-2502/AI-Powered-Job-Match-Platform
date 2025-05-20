const express = require('express');
const app = express();
const cors = require('cors');
const {ConnectMongoDB} = require("./connection")
const authRoute = require('./routes/auth')

require('dotenv').config();

ConnectMongoDB(process.env.MONGODB_URL)

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/auth', authRoute);

app.get('/',(req,res)=>{
    res.send("Hello from home")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
