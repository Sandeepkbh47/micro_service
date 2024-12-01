const express = require('express')
const ewayController = require('../controllers/ewayController')
const router = express.Router()

router.route('/extendEwayBill').post(ewayController.extendEwayBill)


module.exports = router