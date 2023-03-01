// Переведите текст вида border-left-width в borderLeftWidth
/* Напишите функцию camelize(str), 
которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
function camelize(str) {
    let strArr = str.split("-");

    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join("");
}

alert(camelize("background-color") == 'backgroundColor');
alert(camelize("list-style-image") == 'listStyleImage');
alert(camelize("-webkit-transition") == 'WebkitTransition');