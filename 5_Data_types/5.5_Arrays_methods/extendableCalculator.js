// Создать расширяемый калькулятор
/* Создайте функцию конструктор Calculator, 
которая создаёт «расширяемые» объекты калькулятора.
Во-первых, реализуйте метод calculate(str), 
который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» 
и возвращает результат. Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), 
который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), 
которая описывает его.
*/
function Calculator() {
    this.methods = {
        "+": (a, b) => (a + b),
        "-": (a, b) => (a - b)
    };

    this.calculate = function(str) {
        let strSplit = str.split(" ");
        let a = strSplit[0];
        let op = strSplit[1];
        let b = strSplit[2];

        if (isNaN(a) || isNaN(b) || !this.methods[op]) {
            return NaN;
        }
        return this.methods[op](+a, +b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
