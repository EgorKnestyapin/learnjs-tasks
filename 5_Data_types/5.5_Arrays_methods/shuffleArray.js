// Перемешайте массив
/* Напишите функцию shuffle(array), 
которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным 
последовательностям элементов.
*/
function shuffle(array) {
    for (let i = length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}