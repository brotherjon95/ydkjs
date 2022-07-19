// // eval
// function foo(str, a) {
//   eval(str); // cheating
//   console.log(a, b);
// }

// var b = 2;
// foo("var b = 3;", 1) // 1, 3

// // You can use eval safely in strict mode
// function foo(str) {
//   "use strict";
//   eval(str);
//   console.log(a); // ReferenceError: a is not defined
// }

// foo("var a = 2");

// // reserved word with
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// // instead of using
// obj.a = 2;
// obj.b = 3;
// obj.c = 4;

// // with 
// with(obj) {
//   a = 3;
//   b = 4;
//   c = 5;
// }

// function foo(obj) {
//   with(obj) {
//     a = 2;
//   }
// }

// var o1 = {
//   a: 3
// }

// var o2 = {
//   b: 3
// }

// foo(o1);
// console.log(o1.a); // 2

// foo(o2);
// console.log(o2.a); // undefined
// console.log(a); // 2 - this make global variable

// // it's not recommended to use eval or with, because program will work slowly, it's bad for optimization and performance

// Hiding inside scope
// instead of
// function doSomething(a) {
//   b = a + doSomethingElse(a * 2);

//   console.log(b * 3);
// }

// function doSomethingElse(a) {
//   return a - 1;
// }

// var b;

// doSomething(2); // 15

// // use this
// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }

//   var b;

//   b = a + doSomethingElse(a * 2);

//   console.log(b * 3);
// }

// doSomething(2); // 15

// // Funkcije kao opseg vidljivosti
// // instead of 
// var a = 2;

// function foo() {
//   var a = 3;
//   console.log(a);
// }

// foo();

// console.log(a);

// use this. That is IIFE Immediately invoked function expression, first () makes function expresion, and second () at the end execute that expresion
// var a = 2;

// (function foo() {
//   var a = 3;
//   console.log(a);
// }()); // it can be also like })();

// console.log(a);

// // instead of
// setTimeout(function() {
//   console.log('1 second')
// }, 1000);
// // use this
// setTimeout(function timeoutHandler() {
//   console.log('1 second')
// }, 1000);

// when using IIFE, name function
// var a = 2;
// (function IIFE() {
//   var a = 3;
//   console.log(a);
// })();
// console.log(a);

// Global arguments in IIFE
// var a = 2;
// (function IIFE(global){
//   var a = 3;
//   console.log(a);
//   console.log(global.a)
// })(window);

// console.log(a);

// // reversed order
// var a = 2;

// (function IIFE(def){
//   def(window);
// })(function def(global){
//   var a = 3;
//   console.log(a); // 3
//   console.log(global.a) // 2
// });

// let
// var foo = true;

// if (foo) {
//   let bar = foo * 2;
//   bar = someting(bar);
//   console.log(bar);
// }

// console.log(bar); // ReferenceError

// // instead of
// function process(data) {
//   // some work
// }

// var someReallyBigData = { /* big data */ };

// process(someReallyBigData);

// var btn = document.getElementById("my_button");

// btn.addEventListener("click", function click(evt) {
//   console.log("button clicked.")
// }, /* capturingPhase=*/false);

// // use this
// function process(data) {
//   // some work
// }

// {
//   let someReallyBigData = { /* big data */ };

//   process(someReallyBigData);
// }

// var btn = document.getElementById("my_button");

// btn.addEventListener("click", function click(evt) {
//   console.log("button clicked.")
// }, /* capturingPhase=*/false);

// HOISTING - when hoisting happens, first one are functions, than variables

// Avoid to declare functions inside blocks!
// foo(); // b

// var a = true;
// if (a) {
//   function foo() { console.log("a") }
// } else {
//   function foo() { console.log("b") }
// }