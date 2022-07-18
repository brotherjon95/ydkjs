// function taxAmount(amt, taxRate) {
//   return amt + (amt * (taxRate / 100))
// }

// let priceOfGameWithTaxes = taxAmount(105, 17)
// console.log(priceOfGameWithTaxes)

// // shop mobile example
// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const ACCESSORY_PRICE = 99.99;
// const PHONE_PRICE = 9.99;

// var bank_balance = 303.91;
// var amount = 0;

// function calculateTax(amount) {
//   return amount * TAX_RATE;
// }

// function formatAmount(amount) {
//   return "$" + amount.toFixed(2);
// }

// while (amount < bank_balance) {
//   amount = amount + PHONE_PRICE;

//   if (amount < SPENDING_THRESHOLD) {
//     amount = amount + ACCESSORY_PRICE;
//   }
// }

// amount = amount + calculateTax(amount);

// console.log('Iznos kupovine: ' + formatAmount(amount))

// if (amount > bank_balance) {
//   console.log("Ne mozete sebi priustiti ovu kupovinu.")
// }




// negative values in JS: "", 0, -0, NaN, null, undefined, false

// var a = [1, 2, 3];
// var b = [1, 2, 3];
// var c = "1, 2, 3";

// a == c; // true
// b == c; // true
// a == b; // false

// var a = 41;
// var b = "42";
// var c = "43";

// a < b; // true
// b < c; // true

// var a = 42;
// var b = "foo";

// a < b; // false
// a > b; // false
// a == b; // false



// hoisting

// var a =2;

// foo();

// function foo() {
//   a = 3;
//   console.log(a);
//   var a;
// }

// console.log(a);

// function foo() {
//   var a = 1;

//   if (a >= 1) {
//     let b = 2;

//     while (b < 5) {
//       let c = b * 2;
//       b++;

//       console.log(a + c);
//     }
//   }
// }

// foo();


// // striktni rezim na celom nivou
// "use strict";

// function foo() { /*...*/ }

// // striktni rezim na nivou funkcije ili bloka koda nivou
// function foo() { 
//   "use strict";
//   /*...*/ 
// }


// // IIFE (Immediately invoked function expresions)

// (function IIFE() {
//   return 42
// })();


// Closure
// function makeAdder(x) {
//   function add(y) {
//     return y + x;
//   }

//   return add
// }

// var plusOne = makeAdder(1);

// var plusTen = makeAdder(10);

// console.log(plusOne(3));
// console.log(plusOne(41));

// console.log(plusTen(13));


// // Closuer moduls
// function User() {
//   var username, password;

//   function doLogin(user, pwd) {
//     username = user;
//     password = pwd;
//   }

//   var publicAPI = {
//     login: doLogin
//   }

//   return publicAPI;
// }

// var fred = User();

// fred.login("fred", "12Battery34!");

// console.log(fred.login("fred", "12Battery34!"))


// // this short explain

// function foo() {
//   console.log(this.bar)
// }

// var bar = "global";

// var obj1 = {
//   bar: "obj1",
//   foo: foo
// }

// var obj2 = {
//   bar: "obj2"
// }

// foo();
// obj1.foo();
// foo.call(obj2);
// new foo();

// // Prototype
// var foo = {
//   a: 42
// }

// var bar = Object.create(foo);

// bar.b = "hello world";

// bar.b;

// bar.a;

// default parameter

function foo(a = 2) {
  return a
}

foo(); // returns 2
foo(42); // returns 42