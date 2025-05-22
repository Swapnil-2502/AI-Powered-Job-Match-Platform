const express = require('express');
const router = express.Router();
const Job = require('../models/Jobs');

router.get('/',async (req,res)=>{
    try{
        const jobs = await Job.find();
        res.json(jobs)
    }   
    catch(error){
        res.status(500).json({ message: 'Server error',error });
    }
})

module.exports = router;