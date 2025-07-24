const express = require('express');
const { getRomanNumeral } = require("../utils/romanNumeralConversion")
const router = express.Router();
const logger = require("../utils/logger");

// routes for /romannumeral? and related metrics
router.get('/', (req, res) => {
    logger.info(`Received request with query: ${req.query.query}`);
    const input = req.query.query;
    const integer = parseInt(input);
    if (isNaN(integer)) {
        logger.warn(`Invalid integer value received: ${input}`);
        return res.status(400).json({ "error": 'Invalid integer value' });
    }
    if (integer <= 0 || integer > 3999) {
        logger.warn(`Out of range value received: ${integer}`);
        return res.status(400).json({ "error": 'Number should be between 0 and 3999.' })
    }
    const romanNumeral = getRomanNumeral(integer);
    logger.info(`Converted ${integer} to binary: ${romanNumeral}`);
    res.status(200).json({ "input": input, "output": romanNumeral });
})


module.exports = router;