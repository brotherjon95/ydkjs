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


// CLOSURE
// before closure
// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a); // 2
//   }

//   bar();
// }

// foo();

// with closure
// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }

//   return bar;
// }

// var baz = foo();
// baz(); // 2

// another example
// function foo() {
//   var a = 2;

//   function baz() {
//     console.log(a); // 2
//   }

//   bar(baz);
// }

// function bar(fn) {
//   fn(); // closure
// }

// foo();

// or
// var fn;

// function foo() {
//   var a = 2;

//   function baz() {
//     console.log(a);
//   }

//   fn = baz; // add baz to global variable
// }

// function bar() {
//   fn(); // closure
// }

// foo();

// bar(); // 2

// sample
// function wait(msg) {
//   setTimeout(function timer() {
//     console.log(msg);
//   }, 1000);
// }

// wait('closure');

// sample of closure in jQuery
// function setupBot(name, selector) {
//   $(selector).click(function activator() {
//     console.log("Acitvating " + name);
//   });
// }

// setupBot("Closure bot 1", "#bot_1");
// setupBot("Closure bot 2", "#bot_2");

// when we pass callback function as parameter, closure will be created somwehre

// closure in loops
// not valid example
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// valid example
// for (var i = 1; i <= 5; i++) {
//   (function() {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// or
// for (var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }

// or
// for (var i = 1; i <= 5; i++) {
//   let j = i;
//   setTimeout(function timer() {
//     console.log(j);
//   }, j * 1000);
// }

// or
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// MODULS
// before moduls
// function foo() {
//   var something = "cool";
//   var another = [1, 2, 3];

//   function doSomething() {
//     console.log(something);
//   }

//   function doAnother() {
//     console.log(another.join(' ! '));
//   }
// }

// module concept - revealing module
// function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];

//   function doSomething() {
//     console.log(something);
//   }

//   function doAnother() {
//     console.log(another.join(' ! '));
//   }

//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   }
// }

// var foo = CoolModule();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// unique module
// var foo = (function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];

//   function doSomething() {
//     console.log(something);
//   }

//   function doAnother() {
//     console.log(another.join(' ! '));
//   }

//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   }
// })();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// modules can have parameters
// function CoolModule(id) {
//   function identity() {
//     console.log(id);
//   }

//   return {
//     identity
//   }
// }

// var foo1 = CoolModule("foo1");
// var foo2 = CoolModule("foo2");

// foo1.identity();
// foo2.identity();

// modules with named object
// var foo = (function CoolModule(id) {
//   function change() {
//     publicAPI.identify = identify2;
//   }

//   function identify1() {
//     console.log(id);
//   }

//   function identify2() {
//     console.log(id.toUpperCase());
//   }

//   var publicAPI = {
//     change,
//     identify: identify1
//   }

//   return publicAPI;
// })("foo module");

// foo.identify(); // foo module
// foo.change();
// foo.identify(); // FOO MODULE

// another example
// var MyModules = (function Manager() {
//   var modules = {};

//   function define(name, deps, impl) {
//     for (var i = 0; i < deps.length; i++) {
//       deps[i] = modules[deps[i]];
//     }
//     modules[name] = impl.apply(impl, deps);
//   }

//   function get(name) {
//     return modules[name];
//   }

//   return {
//     define,
//     get
//   }
// })();

// MyModules.define("bar", [], function() {
//   function hello(who) {
//     return "Let me introduce: " + who;
//   }

//   return {
//     hello
//   }
// });

// MyModules.define("foo", ["bar"], function(bar) {
//   var hungry = "hippo";

//   function awesome() {
//     console.log(bar.hello(hungry).toUpperCase());
//   }

//   return {
//     awesome
//   }
// });

// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");

// console.log(bar.hello("hippo"));
// foo.awesome();