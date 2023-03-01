// Вызов в контексте массива
// Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a,b,function(){alert(this);}
// При arr[2] вызывается функция, this указывает на сам массив