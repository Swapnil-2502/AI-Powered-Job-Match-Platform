const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const Profile = require('../models/Profile');
const router = express.Router();

router.post('/',authMiddleware, async (req,res)=>{
    const userId = req.user.id;

    const {name,location, experience, skills, jobType} = req.body;

    try{
        let profile = await Profile.findOneAndUpdate(
            { user: userId },
            { name, location, experience, skills, jobType, user: userId },
            { new: true, upsert: true }
        )
        res.json({ message: 'Profile saved successfully', profile });
    }
    catch(error){
        res.status(500).json({ message: 'Failed to save profile', error: err.message });
    }
})

router.get('/',authMiddleware, async (req,res)=>{
    try{
        const profile = await Profile.findOne({ user: req.user.id });
        res.json(profile);
    }
    catch(error){
        res.status(500).json({ message: 'Error fetching profile', error: err.message });
    }
})

module.exports = router;