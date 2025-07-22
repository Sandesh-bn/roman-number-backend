const express = require('express');
const { getRomanNumeral } = require("../utils/romanNumeralConversion")
const router = express.Router();

router.get('/', (req, res) => {
    const input = req.query.query;
    const integer = parseInt(input);
    if (isNaN(integer)) {
        return res.status(400).json({ "error": 'Invalid integer value' });
    }
    if (integer <= 0 || integer > 3999){
        return res.status(400).json({ "error": 'Number should be between 0 and 3999.'})
    }
    const romanNumeral = getRomanNumeral(integer);

    res.status(200).json({ "input": input, "output": romanNumeral });
})


module.exports = router;