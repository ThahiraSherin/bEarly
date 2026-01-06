require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3002;
const JWT_SECRET = process.env.JWT_SECRET || 'default secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

module.exports = {
    MONGODB_URI,
    PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN
};
