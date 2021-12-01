const {getCircleArea, getCircleLength} = require('../Lesson_12_HW/calcCircle');

describe('Test functions getCircleArea and getCircleLength', () => {
    it('1) Протестувати функцію getCircleLength() з аргументом 22, перевірити твержєення, що довжина кола дорівнює 138.2', () => {
        expect(getCircleLength(22).toFixed(1)).toBe('138.2');
    });

    it('2) Протестувати функцію getCircleArea() з аргументом 9, перевірити твержєення, що приблизна площа кола дорівнює 254.47.', () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47);
    });

    it('3) Протествувати обидві функції без переданих аргументів.', () => {
        test(getCircleArea());
        test(getCircleLength());
    });
});