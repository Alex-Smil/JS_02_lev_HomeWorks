describe('Проверка суммы чисел', () => {
    it('Проверка суммы чисел', () => {
        expect(mySimpleFunc(null, 2)).toBeNull();
        expect(mySimpleFunc(4, null)).toBeNull();
        expect(mySimpleFunc(null, null)).toBeNull();
        expect(mySimpleFunc(2, 2)).toBe(4);
        expect(mySimpleFunc(3, 7)).toBe(10);
        expect(mySimpleFunc(12, 1)).toBe(13);
    });
});