// Вопрос об "if"
/* Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
*/
if (-1 || 0) alert( 'first' ); // Выполнится. -1 в условии if(...)
if (-1 && 0) alert( 'second' ); // Не выполнится. 0 в условии if(...)
if (null || -1 && 1) alert( 'third' ); // Выполнится. 1 в условии if(...)