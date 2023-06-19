/*1*/
// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };

// let {first: f, second: s, third: x, fifth = "Name №5"} = names;

// console.log(f); // "Tom"

// console.log(x); // "Ray"

// console.log(fifth); // "Name №5"

/*2  */

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// /* розвязок */
let {names: { name2="Tom", name4 = "Bob"}, ages: {age2 = 24, age4 = 26} } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

/* 3 Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
 Якщо параметри типу Number відсутні, повертає число 0. */

/*розвязок*/
 function mul (...args) {
    let product = 1;
    let numbers = [];
    // перевіримо на наявність чисел
    for (let arg of args) {
        if (typeof arg === 'number') {
            numbers.push(arg);
        }
    }

    if (numbers.length <=0) {
        return 0;
    } else{
        for (let i = 0; i < numbers.length; i++){
            product *= numbers[i];
        }
        return product;
    }
}

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

// practice
// const myObj = {multiply(...args) {
//     let product = 1;
//     let numbers = [];
//     // перевіримо на наявність чисел
//     for (let arg of args) {
//         if (typeof arg === 'number') {
//             numbers.push(arg);
//         }
//     }

//     if (numbers.length <=0) {
//         return 0;

//     } else{
//         for (let i = 0; i < numbers.length; i++){
//             product *= numbers[i];
//         }
//         return product;
//     }
// }
// };

// const mul = myObj.multiply;

/* 10-4.
Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().*/

// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback((function () {
//          return this.data + "";
//       }).bind(this));
//    }
// };
// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//      this.server.data = data;
//      this.server.convertToString(this.notification());
//    },
//    notification: function () {
//      return function (callback) {
//        this.result = callback();
//      }.bind(this);
//    },
//  };

/* solution  here  the arrow function () => {} is used instead of the function () {}.bind(this) construct.
# Arrow functions automatically bind the context lexically, so this inside the arrow function refers to the same this value 
as the surrounding function. Therefore, you don't need to use bind(this) to maintain the proper context.*/

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

/* 5 Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, 
функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. 
Після цього функція повертає даний об'єкт Map.
Приклади використання функції: */
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
   let map1 = new Map;
   if (keys.length === values.length) {

      for (let i = 0; i < keys.length; i++){
         map1.set(keys[i], values[i]);
      }
   }
   return map1;

}

let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

/* 6 За допомгою коду створюється масив, використовуючи цикл, до масиву записуються три функції. 
Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). */

// var arr = [];

//    for (var i = 0; i <= 2; i++) {
//       arr[i] = function () {
//          console.log(i);
//       };
//    }

let arr = [];

for (let i = 0; i <= 2; i++) {
  arr.push(function() {
    console.log(i);
  });
}

arr[0](); // 0
arr[arr.length - 1](); // 2

// *****Lecture arrow funcs

// const appFunc1 = function() {
//     console.log("Hello");
// }
// // rewrite to arrow function
// const  appFunc2 = ()=> {
//     console.log("Hello");
// }

// const fun = function(a, b) {
//     return a + b;
// }
// можна і так

// const fun2 = (a, b) =>  a + b;

// якщо треба додаткові дії чи перевірки

// const fun3 = (a, b) => {
//     if (a>0) {
//         return a + b;
//     }
// }

//or ternary operator
// const fun4 = (a, b) => (a> 0) ? a + b : "bad idea";

// let numbers = [1, 2, 3, 4, 55, 21, 88];

// numbers.map( el => {
//     console.log(el*3);
// });

// const newN = numbers.map(el => el+1);
// console.log(newN);

// // when you need to make few actions on your data
// const newN2 = numbers.sort()
//                     .filter((el) => el > 5)
//                     .map((el) => el+2);

// console.log(newN2);

// const minNumb = Math.min(...numbers);
// console.log(minNumb);

// let numbs2 = [45, 23, 14, 15, 60];
// const arrConcat = [...numbers, ...numbs2];
// console.log(arrConcat);

// function Person() {
//     let self = this;
//     this.age = 0;

//     setInterval(function growUp() {
//         self.age ++;
//     }, 1000);
// }

// /* with arrow func */
// function Pers() {
//     this.age = 0;

//     setInterval(() => {
//         this.age ++;
//     }, 1000);
// }
