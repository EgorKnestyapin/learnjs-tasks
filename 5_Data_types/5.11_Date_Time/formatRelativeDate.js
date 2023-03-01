// Форматирование относительной даты
/* Напишите функцию formatDate(date), форматирующую date 
по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, 
вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, 
т.е. 31.12.16 10:00.
*/
function formatDate(date) {
    let now = new Date();
    let diffTotal = now - date;
    let diffSeconds = diffTotal / 1000;
    let diffMinutes = diffTotal / (1000 * 60);
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getDate();
    let dateYear = date.getFullYear();
    let dateHour = date.getHours();
    let dateMinute = date.getMinutes();

    if (diffTotal < 1000) {
        return "прямо сейчас";
    } else if (diffSeconds < 60) {
        return `${diffSeconds} сек. назад`;
    } else if (diffMinutes < 60 ) {
        return `${diffMinutes} мин. назад`;
    } else {
        let day = dateDay < 10 ? "0" + dateDay : dateDay;
        let month = dateMonth < 10 ? "0" + dateMonth : dateMonth;
        let year = dateYear.toString().slice(-2);
        let hours = dateHour < 10 ? "0" + dateHour : dateHour;
        let minutes = dateMinute < 10 ? "0" + dateMinute : dateMinute;
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );