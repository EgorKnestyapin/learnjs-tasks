// Побитовый оператор и значение
// Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?
alert( 123 ^ 0 ); // 123, исключающее или ставит бит в 1, если хотя бы в одном есть 1, но не вместе
alert( 0 ^ 123 ); // 123  в числе 0 все биты равны 0, поэтому число не меняется
alert( ~~123 ); // 123, ~ меняет 1 в 0, второй ~ возвращает 0 обратно в 1, поэтому число не меняется