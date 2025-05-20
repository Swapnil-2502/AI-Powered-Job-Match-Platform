const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try{
        const {name, email, password} = req.body

        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        //Now hasing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        console.log(newUser)
        res.status(201).json({
            message: 'User created successfully',
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;

        console.log(email,password);
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({ message: 'Email doesnt exists' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect Password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
        });

        res.status(200).json({
            message: 'Login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }   

}