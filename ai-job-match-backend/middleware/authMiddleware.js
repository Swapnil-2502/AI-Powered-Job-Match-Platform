const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization
    //console.log(authHeader)

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id }; 
        next();
    }
    catch(error){
        return res.status(401).json({ message: 'Invalid token', error});
    }

}

module.exports = {authMiddleware}