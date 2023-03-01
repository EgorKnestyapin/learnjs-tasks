// Что не так с этим тестом?
/* Что не так в нижеприведённом тесте функции pow?
it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });
  */
  ` Если возникнет ошибка в тестировании, 
    то неизвестно в какой именно части кода она находится `
// исправленный вариант
describe("возводит 5 в степень n", function() {
    it("5 в степени 1 равняется 5", function() {
        assert.equal(pow(5, 1), 5);
    });

    it("5 в степени 2 равняется 25", function() {
        assert.equal(pow(5, 2), 25);
    });

    it("5 в степени 3 равняется 125", function() {
        assert.equal(pow(5, 3), 125);
    });
})