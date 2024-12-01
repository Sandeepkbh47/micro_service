const catchAsync = require('./../util/catchAsync')
const logger = require('./../logger')
exports.extendEwayBill = catchAsync(async (req, res, next) => {
    setTimeout(() => {
        logger.info("Done" + new Date().toTimeString())
        res.status(200).json({ statusCode: 200, msg: "Done" + new Date().toTimeString() })
    }, 1000)
    //return next(new Error('No token. Please login again'))
})
