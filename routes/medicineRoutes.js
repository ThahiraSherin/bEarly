const express = require('express');
const { getMedicines, addMedicine, updateMedicine, deleteMedicine } = require('../controllers/medicineController');
const auth = require('../middleware/auth');


const router = express.Router();

// Routes for medicines
router.get('/', getMedicines);
router.post('/', addMedicine);
router.put('/:id', auth, updateMedicine);
router.delete('/:id',  auth, deleteMedicine);

module.exports = router;