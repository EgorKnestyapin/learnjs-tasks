// Вывод односвязного списка в обратном порядке
/* Выведите односвязный список в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/
// С использованием цикла
function printReverseList1(list) {
    let tmp = list;
    let arr = [];

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
}

// Через рекурсию
function printReverseList2(list) {
    
    if (list.next) {
        printList1(list.next);
    }

    alert(list.value);
}