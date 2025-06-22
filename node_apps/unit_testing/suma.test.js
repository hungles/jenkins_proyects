// suma.test.js
const suma = require('./suma');

test('sumar 1 + 2 es 3', () => {
    expect(suma(1, 2)).toBe(3);
});
