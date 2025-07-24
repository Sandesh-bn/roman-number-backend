const { getRomanNumeral } = require('../utils/romanNumeralConversion');

// test covering roman numeral method for all cases
describe('romanNumeralConversion', () => {
  test('converts 0 to empty string', () => {
    expect(getRomanNumeral(0)).toBe('');
  });

  test('converts 1 to I', () => {
    expect(getRomanNumeral(1)).toBe('I');
  });

  test('converts 4 to IV', () => {
    expect(getRomanNumeral(4)).toBe('IV');
  });

  test('converts 9 to IX', () => {
    expect(getRomanNumeral(9)).toBe('IX');
  });

  test('converts 40 to XL', () => {
    expect(getRomanNumeral(40)).toBe('XL');
  });

  test('converts 48 to XLVIII', () => {
    expect(getRomanNumeral(48)).toBe('XLVIII');
  });

  test('converts 90 to XC', () => {
    expect(getRomanNumeral(90)).toBe('XC');
  });

  test('converts 99 to XCIX', () => {
    expect(getRomanNumeral(99)).toBe('XCIX');
  });

  test('converts 3999 to MMMCMXCIX', () => {
    expect(getRomanNumeral(3999)).toBe('MMMCMXCIX');
  });

  test('converts 2023 to MMXXIII', () => {
    expect(getRomanNumeral(2023)).toBe('MMXXIII');
  });

  test('converts 1000 to M', () => {
    expect(getRomanNumeral(1000)).toBe('M');
  });

  test('converts 3000 to MMM', () => {
    expect(getRomanNumeral(3000)).toBe('MMM');
  });

  test('converts 3999 to MMMCMXCIX', () => {
    expect(getRomanNumeral(3999)).toBe('MMMCMXCIX');
  });
  
  test('converts 4000 to undefined', () => {
    expect(getRomanNumeral(4000)).toBe("undefined");
  });
});
