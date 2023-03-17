// Установка и уменьшение значения счётчика
/* Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
*/
function makeCounter() {
    let count = 0;

    function counter(){
        return count++;
    }

    counter.set = function(value) {
        return count = value;
    };
    counter.decrease = function() {
        return count--;
    };

    return counter;
}
  
let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
  
alert( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1
  
alert( counter() ); // 10 (вместо 11)