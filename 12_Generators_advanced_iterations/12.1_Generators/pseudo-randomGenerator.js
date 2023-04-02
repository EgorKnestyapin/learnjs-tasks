// Псевдослучайный генератор
/* Задачей является создать функцию-генератор pseudoRandom(seed), 
которая получает seed и создаёт генератор с указанной формулой.
*/
function* pseudoRandom(seed) {
    let next = seed;

    while (true) {
        next = next * 16807 % 2147483647;
        yield next;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073