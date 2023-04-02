// Отсортируйте массив с буквой ё
// Используя Intl.Collator, отсортируйте массив:
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator(undefined, {
    sensitivity: 'accent'
});

animals.sort(function(a, b) {
    return collator.compare(a, b);
});

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК