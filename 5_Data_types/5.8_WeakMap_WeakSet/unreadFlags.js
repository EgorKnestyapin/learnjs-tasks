// Хранение отметок "не прочитано"
/* Есть массив сообщений:
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё.
Добавляются новые сообщения и удаляются старые, 
и вы не знаете в какой момент это может произойти.

Имея такую вводную информацию, решите, 
какую структуру данных вы могли бы использовать для ответа 
на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, 
чтобы можно было однозначно сказать, 
было ли прочитано это сообщение для каждого объекта сообщения.
*/
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
alert("Первое сообщение прочитано:" + readMessages.has(messages[0]));

messages.shift();