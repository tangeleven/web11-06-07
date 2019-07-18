function add(num1, num2) {
    return num1 + num2;
}

// 测试套件 test suite
describe('kaikeba', () => {
    it('测试add函数', () => {
        expect(add(1, 3)).toBe(3)
        expect(add(1, 3)).toBe(4)
        expect(add(-2, 3)).toBe(1)
    })
})
















