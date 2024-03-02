const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userControllers'); // Import the controllers
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(registerUser).get(protect,allUsers); // Use registerUser for registration route
router.route('/login').post(authUser); // Use authUser for login route

module.exports = router;

