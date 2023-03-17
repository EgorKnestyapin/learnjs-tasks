// Изменяем "prototype"
/* В коде ниже мы создаём нового кролика new Rabbit,
а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
*/
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

alert( rabbit1.eats ); // true

// …А если код такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit2.eats ); // false

// Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

delete rabbit.eats;

alert( rabbit3.eats ); // true

// Или, наконец, такой
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit4.eats ); // undefined