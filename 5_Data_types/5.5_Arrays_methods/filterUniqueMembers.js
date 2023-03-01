// Оставить уникальные элементы массива
/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.
*/
function unique(arr) {
    let uniqueArr = [];

    for (let item of arr) {
        if (uniqueArr.includes(item)) continue;
        uniqueArr.push(item);
    }

    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O