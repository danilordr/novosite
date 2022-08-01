const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkoutController')

router.get('/', CheckoutController.view)

module.exports = router