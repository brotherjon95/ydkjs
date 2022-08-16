// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   var greeting = "Hello, I'm " + identify.call(this);
//   console.log(greeting);
// }

// var me = {
//   name: "Kyle"
// };

// var you = {
//   name: "Jon"
// };

// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

// without this
// function identify(context) {
//   return context.name.toUpperCase();
// }

// function speak(context) {
//   var greeting = "Hello, I'm " + identify(context);
//   console.log(greeting);
// }

// identify(you);
// speak(me);


// function foo(num) {
//   console.log("foo: " + num);

//   // belezi koliko je puta pozvana f-ja foo
//   this.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }

// console.log(foo.count); // returns 0 ??

// this work

// function foo(num) {
//   console.log("foo: " + num);

//   // belezi koliko je puta pozvana f-ja foo
//   foo.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }

// console.log(foo.count); // returns 4

// another example with this usage

// function foo(num) {
//   console.log("foo: " + num);

//   // belezi koliko je puta pozvana f-ja foo
//   // this sada zaista jeste foo na osnovu nacina na koji je foo pozvana
//   this.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo.call(foo, i);
//   }
// }

// console.log(foo.count); // returns 4

// THIS nije veza koje se uspostavlja u vreme pisanja koda, vec u vreme izvrsavanja !


// 4 pravila upucivanja na this
// 1. Podrazumevano povezivanje
// function foo() {
//   // ako ovde stavimo "use strict"; nece da radi
//   console.log(this.a);
// }

// var a = 2;

// foo();

// 2. Implicitno povezivanje
// function foo() {
//   console.log(this.a)
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// obj.foo(); // 2

// 3. Eksplicitno povezivanje

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2
// };

// foo.call(obj); // 2

// another example 
// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2
// };

// var bar = function() {
//   foo.call(obj);
// };

// bar(); // 2
// setTimeout(bar, 100); // 2
// bar.call(window); // 2

// another example 
// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// var obj = {
//   a: 2
// };

// var bar = function() {
//   return foo.apply(obj, arguments)
// };

// var b = bar(3); // 2 3
// console.log(b); // 5

// another example
// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// // helper function
// function bind(fn, obj) {
//   return function() {
//     return fn.apply(obj, arguments)
//   }
// }

// var obj = {
//   a: 2
// };

// var bar = bind(foo, obj);

// var b = bar(3); // 2 3
// console.log(b); // 5

// another example
// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// var obj = {
//   a: 2
// }

// var bar = foo.bind(obj);

// var b = bar(3); // 2 3
// console.log(b); // 5

// 4. Povezivanje funkcije pomocu operatora new

// when we call function with word new in front of name of the function, totally new object is created and it is bounded with its own property [[Prototype]], this is inside that function and if it don't return alternative object, function which is related with operator new automatically returns new created object
function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2