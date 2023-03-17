// Декоратор debounce
/* Результатом декоратора debounce(f, ms) должна быть обёртка, 
которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, 
что все остальные вызовы будут игнорироваться в течение ms.
*/
function debounce(f, ms) {
    let interval =  true;

    function wrapper(...args) {
        if (interval) {
            f.apply(this, args);
            interval = false;
            setTimeout(() => interval = true, ms);
        }
    }

    return wrapper;
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)