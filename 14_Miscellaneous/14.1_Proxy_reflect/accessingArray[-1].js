// Получение элемента массива с отрицательной позиции
/* В некоторых языках программирования возможно получать элементы массива, 
используя отрицательные индексы, отсчитываемые с конца.
Другими словами, array[-N] – это то же, что и array[array.length - N].
Создайте прокси, который реализовывал бы такое поведение.
*/
let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(...arguments);
    }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2
