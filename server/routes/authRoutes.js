const express = require('express');
const {
  register,
  // verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');
const { authenticateUser } = require('../middleware/authentication');
const { authenticateUserRegionManager } = require('../utils/checkPermissionsRegionManager');
const router = express.Router();

router.post('/register', register);
// router.post('/verify-email', verifyEmail);
router.post('/login', login);
router.delete('/logout', authenticateUser, logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/region-manager', authenticateUserRegionManager, logout);

module.exports = router;
