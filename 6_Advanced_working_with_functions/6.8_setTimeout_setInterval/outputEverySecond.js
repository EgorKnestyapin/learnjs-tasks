// Вывод каждую секунду
/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/
// Используя setInterval
function printNumbers1(from, to) {
    let current = from;

    function start() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }

    start();
    let timerId = setInterval(start, 1000);
}

// Используя рекурсивный setTimeout
function printNumbers2(from, to) {
    let current = from;

    function start() {
        alert(current);
        if (current != to) {
            setTimeout(start, 1000);
        }
        current++;
    }

    start();
}