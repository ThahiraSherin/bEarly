const isExpiringSoon = (expiryDate) => {
    const today = new Date();
    const diff = (new Date(expiryDate) - today) / (1000 * 60 * 60 * 24); // difference in days
    return diff <= 30; // expiring within 30 days
};

module.exports = { isExpiringSoon };