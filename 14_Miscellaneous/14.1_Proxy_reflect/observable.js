// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси
let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this.handlers.push(handler);
    }

    return new Proxy(target, {
        set(target, key, value, receiver) {
            let success = Reflect.set(...arguments);
            if (success) {
                target[handlers].forEach(handler => handler(key, value));
            }
        }
    });
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John