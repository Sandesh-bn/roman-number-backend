function getRomanNumeral(number){
    let thousandthPlace = ["", "M", "MM", "MMM"];
    let hundredthPlace = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let tenthPlace = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let onethPlace = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return thousandthPlace[Math.floor(number / 1000)] + hundredthPlace[Math.floor((number % 1000) / 100)] + tenthPlace[Math.floor((number % 100) / 10)] + onethPlace[number % 10];
}

module.exports = { getRomanNumeral };