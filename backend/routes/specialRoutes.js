const express = require('express');
const router = express.Router();
const { upload } = require('../config/s3');
const { getSpecials, createSpecial, deleteSpecial } = require('../controllers/specialController');
const { protect } = require('../middleware/auth');

router.get('/', getSpecials);
router.post('/', protect, upload.single('image'), createSpecial);
router.delete('/:id', protect, deleteSpecial);
<<<<<<< HEAD
=======
router.put('/:id', protect, upload.single('image'), createSpecial);
>>>>>>> 5bdc087 (debug admin login error, fix database error and added update event in dashboard)

module.exports = router;