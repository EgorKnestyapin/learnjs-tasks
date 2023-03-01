// Сколько секунд осталось до завтра?
/* Создайте функцию getSecondsToTomorrow(), 
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть 
конкретного значения сегодняшней даты.
*/
function getSecondsToTomorrow() {
    let now = new Date();
    let totalSecondsInDay = 24 * 3600 * 1000;
    let hoursToday = now.getHours() * 3600;
    let minutesToday = now.getMinutes() * 60;
    let secondsToday = now.getSeconds();
    
    return totalSecondsInDay - hoursToday - minutesToday - secondsToday;
}

alert( getSecondsToTomorrow() );