// Отфильтруйте анаграммы
/* Напишите функцию aclean(arr), которая возвращает массив слов, 
очищенный от анаграмм.
*/
function aclean(arr) {
    let map = new Map();

    for (let value of arr) {
        let sortedStr = value.toLowerCase().split("").sort().join("");
        map.set(sortedStr, value);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"