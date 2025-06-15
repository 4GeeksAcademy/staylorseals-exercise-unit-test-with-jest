const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
       let total = sum(14, 9);
       expect(total).toBe(23);
})

const { fromEuroToDollar } = require('./app.js');

test('2 euros should be close to 2.14 dollars', () => {
       let total = fromEuroToDollar(2);
       expect(total).toBeCloseTo(2.14);
})

const { fromDollarToYen } = require('./app.js');

test('2 dollars should be close to 292.52 yen', () => {
       let total = fromDollarToYen(2);
       expect(total).toBeCloseTo(292.52);
})

const { fromYenToPound } = require('./app.js');

test('2 yen should be close to .011 british pounds', () => {
       let total = fromYenToPound(2);
       expect(total).toBeCloseTo(.011);
})


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})
