const { generatePastelColor } = require('../js/app.js');

test('generatePastelColor returns a string starting with hsl', () => {
  const color = generatePastelColor();
  expect(typeof color).toBe('string');
  expect(color.startsWith('hsl')).toBe(true);
});
