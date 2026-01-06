const Medicine = require('../models/Medicine');
const { isExpiringSoon } = require('../utils/expiryCheck');

// Controller to get all medicines
const getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();

        const result = medicines.map(med => ({
            ...med._doc,
            lowStock: med.quantity < med.minStock,
            expiringSoon : isExpiringSoon(med.expiryDate)
        }));

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }   
};

const addMedicine = async (req, res) => {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
};

const updateMedicine = async (req, res) => {
    const { id } = req.params;
    const updatedMedicine = await Medicine.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedMedicine);
};

const deleteMedicine = async (req, res) => {
    const { id } = req.params;
    await Medicine.findByIdAndDelete(id);
    res.status(204).send();
};  

module.exports = {
    getMedicines,
    addMedicine,
    updateMedicine,
    deleteMedicine
};