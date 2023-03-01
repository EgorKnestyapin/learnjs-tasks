// Хранение времени прочтения
/* Теперь вопрос стоит так: какую структуру данных вы бы предложили 
использовать для хранения информации о том, когда сообщение было прочитано?
*/
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();
readMessages.set(messages[0], new Date());