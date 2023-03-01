// Скопирован ли массив?
// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4, shoppingCart и fruits ссылаются на один и тот же объект