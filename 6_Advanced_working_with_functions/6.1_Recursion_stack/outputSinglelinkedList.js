// Вывод односвязного списка
/*  Допустим, у нас есть односвязный список:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.
*/
// Используя цикл
function printList1(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}

// Через рекурсию
function printList2(list) {
    alert(list.value);
    
    if (list.next) {
        printList2(list.next);
    }
}