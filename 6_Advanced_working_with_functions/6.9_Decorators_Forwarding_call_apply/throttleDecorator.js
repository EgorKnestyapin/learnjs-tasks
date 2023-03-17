// Тормозящий (throttling) декоратор
/* Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
передавая вызов в f не более одного раза в ms миллисекунд. 
Те вызовы, которые попадают в период «торможения», игнорируются.
*/
function throttle(f, ms) {
    let isThrottled = false;
    let savedThis;
    let savedArgs;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        isThrottled = true;
        f.apply(this, arguments);

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    
    return wrapper;
}