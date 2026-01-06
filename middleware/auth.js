const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
    let token;

    //1.Check Authorization header
    if(
        req.header.authorization &&
        req.header.authorization.startsWith('Bearer')
    ) {
            //extract token
            token = req.header.authorization.split(' ')[1];

            //to check if token is available
            if(!token) {
                return res.status(401).json({ message: 'Not authorized, no token found' });
            }

        try {
            //verify token
            const decoded = jwt.verify(token, JWT_SECRET);

            //attach user get it from db 
            req.user = await User.findById(decoded.id).select('-password');

            return next(); 

        } catch (error) {
            return res.status(401).json({ message: 'Not authorized, Invalid token' });
        }
    }
};

module.exports = auth;