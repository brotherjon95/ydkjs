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
// function foo(a) {
//   this.a = a;
// }

// var bar = new foo(2);
// console.log(bar.a); // 2

// using this rules
// function foo() {
//   console.log(this.a);
// }

// var obj1 = {
//   a: 2,
//   foo: foo
// };

// var obj2 = {
//   a: 3,
//   foo: foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1); // 2
// foo(); // undefined

// povezivanje pomocu new

// function foo(something) {
//   this.a = something;
// }

// var obj1 = {
//   foo: foo
// };

// var obj2 = {};

// obj1.foo(2);
// console.log(obj1.a); // 2

// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3

// var bar = new obj1.foo(4);
// console.log(obj1.a); // 2
// console.log(bar.a); // 4



// function foo(something) {
//   this.a = something;
// }

// var obj1 = {};

// var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a); // 2
// var baz = new bar(3);
// console.log(obj1.a); // 2
// console.log(baz.a); // 3

// // ODREDJIVANJE STA THIS PREDSTAVLJA
// 1. Da li je funkcija pozvana s operatorom new (povezivanje pomocu new)? Ako jeste, this predstavlja novokonstruisani objekat.
// var bar = new foo()
// 2. Da li je funkcija pozvana pomocu metode call ili apply (eksplicitno povezivanje), ili cak i umetnuta u cvrsto povezivanje pomocu funkcije bind?
// Ako jeste, this predstavlja eksplicitno zadati objekat.
// var bar = foo.call(obj2)
// 3. Da li je funkcija pozvana sa zadatim kontekstom (implicitno povezivanje), sto je inace poznato kao vlasnistvo nad objektom ili sadrzavanje objekta?
// Ako jeste, this predstavlja taj zadati objekat koneksta.Ako
// var bar = obj1.foo()
// 4. U ostalim slucajevima, this je podrazumevani objekat (podrazumevano povezivanje). Ako vazi striktni rezim, to je undefined objekat, a ukoliko ne vazi,
// to je globalni objekat.Ako
// var bar = foo()


// DMZ objekat (demilitarizovana zona -  objekat koji cuva referencu na ceo kod u slucaju da this radi pogresno)
// function foo (a, b) {
//   console.log('a:' + a + 'b:' + b);
// }

// // nas prazni DMZ objekat
// var dmzObj = Object.create(null);

// // raspodela niza na parametre
// foo.apply(dmzObj, [2, 3]); // a:2, b:3

// // Parcanje pomocu bind(..)
// var bar = foo.bind(dmzObj, 2);
// bar(3); // a:2, b:3

// LEKSICKI THIS - uz pomoc arrow funkcije koja povezuje this sa okruzujucim opsegom f-je
// function foo() {
//   // vraca f-ju sa strelicom
//   return (a) => {
//     // ovaj 'this' je leksicki nasledjen od foo()
//     console.log(this.a);
//   }
// }

// var obj1 = {
//   a: 2
// };

// var obj2 = {
//   a: 3
// };

// var bar = foo.call(obj1);
// bar.call(obj2); // 2, ne 3!

// OBJECTS
// objekti mogu biti tipa string, number, boolean, null, undefined, object
// Ugradjeni objekti - String, Number, Boolean, Object, Function, Array, Date, RegExp, Error

// copying object
// var newObj = Object.assign( {}, myObject );

// PROPERTY DESCRIPTOR
// var myObject = {
//   a: 2
// }

// Object.getOwnPropertyDescriptor(myObject, 'a');
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// define property
// var myObject = {};

// Object.defineProperty(myObject, 'a', {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// myObject.a; // 2

// WRITABLE
