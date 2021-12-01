const {filterFoodPrice} = require('../Lesson_12_HW/food');

/**
 * Створити файл food.test.js в якому потрібно протестувати функцію для заданого масиву food з аргументами min = 12, max = 40.
 * 1) Протестувати чи очікувана довжина відсортованого масиву 3, відповідає реальній.
 * 2) Протестувати чи відсортований масив містить об’єкт { kind: 'pepper', price: 27 }.
 * 3) Протестувати чи відсортований масив містить 2, 3 і 4 елементи вихідного масиву food.
 * 4) Протестувати чи властивість price 1-го елемента відсортованого масиву є більшою значення min.
 * 5) Протестувати чи властивість price 3-го елемента відсортованого масиву є меншою значення max.
 * 6) Протестувати твердження про те, що відсортований масив не містить елемента { kind: 'lemon', price: 50 }.
 * 7) Запропонуйте і протестуйте щонайменше 2-3 своїх твердження для заданої функції і масиву food.
*/

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

describe('протестувати функцію для заданого масиву food з аргументами min = 12, max = 40.', () => {
    it('1) Протестувати чи очікувана довжина відсортованого масиву 3, відповідає реальній.', () => {
        expect(filterFoodPrice(food, 12, 40).length === 3).toBeTruthy();
    });

    it('2) Протестувати чи відсортований масив містить об’єкт { kind: "pepper", price: 27 }.', () => {
        expect(filterFoodPrice(food, 12, 40)[1]).toHaveProperty('kind', 'pepper');
    });

    it('3) Протестувати чи відсортований масив містить 2, 3 і 4 елементи вихідного масиву food.', () => {
        expect(filterFoodPrice(food, 12, 40)[0]).toHaveProperty('kind', 'bred');
        expect(filterFoodPrice(food, 12, 40)[1]).toHaveProperty('kind', 'pepper');
        expect(filterFoodPrice(food, 12, 40)[2]).toHaveProperty('kind', 'banana');
    });

    it('4) Протестувати чи властивість price 1-го елемента відсортованого масиву є більшою значення min.', () => {
        expect(filterFoodPrice(food, 12, 40)[0].price).toBeGreaterThan(12);
    });

    it('5) Протестувати чи властивість price 3-го елемента відсортованого масиву є меншою значення max.', () => {
        expect(filterFoodPrice(food, 12, 40)[2].price).toBeLessThan(40);
    });

    it('6) Протестувати твердження про те, що відсортований масив не містить елемента { kind: "lemon", price: 50 }.', () => {
        const filteredArr = filterFoodPrice(food, 12, 40);
        let isLemon = false;
        for (let i in filteredArr) {
            if (filteredArr[i].kind === 'lemon') {
                isLemon = true;
            }
        }
        expect(isLemon).toBeFalsy();
    });

    it('7) Запропонуйте і протестуйте щонайменше 2-3 своїх твердження для заданої функції і масиву food.', () => {
        const arrayToCompare = [
            { kind: 'bred', price: 16 },
            { kind: 'pepper', price: 27 },
            { kind: 'banana', price: 32 }
        ];
        expect(filterFoodPrice(food, 12, 40).length).toBe(3);
        expect(filterFoodPrice(food, 12, 40)).toEqual(arrayToCompare);
        expect(filterFoodPrice(food, 12, 40)).toBeInstanceOf(Object);
    });
});
