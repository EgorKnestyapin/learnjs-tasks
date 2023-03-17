// Фильтрация с помощью функции
/* У нас есть встроенный метод arr.filter(f) для массивов. 
Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
*/
function inBetween(a, b) {

    return function(x) {
        return (x >= a) && (x <= b);
    };
}

function inArray(arr) {

    return function(x) {
        return x in arr;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2