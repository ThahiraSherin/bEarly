const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../utils/config");

//Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, 
        { expiresIn : JWT_EXPIRES_IN });
};

//Register 
const register = async (req, res ,next) => {
    const { name, email, password, role } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password, role });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,    
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        next(error);
    }
};

//Login
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');

        if(!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await user.comparePassword(password);

        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    }
    catch (error) {
        next(error);
    }   
};

module.exports = {
    register,
    login,
};