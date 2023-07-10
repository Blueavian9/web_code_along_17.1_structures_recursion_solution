/*
Ten JavaScript Closure


1. Scope

var a = 10;

function foo() {
    console.log(a);
}

foo();




2. Local Scopes

var a = 10;

function foo() {
    var a = 20;
    console.log(a);
}

a = 30;

foo();




3. Lexical Scoping

var a = 10;
function foo() {
  console.log(a);
}

function bar() {
    var a = 20;
    foo();
}

bar();




4. Modified Lexical Scope
var a = 10;

function bar() { --> Global Scope
    var a = 20;  --> Bar Scope
    
    function foo() {
        console.log(a); --> Foo Scope
    }
    
    foo();
}

bar();




5. Closure

function outerFunc() {
    let a = 10; // --> Outer Scope
    
    function innerFunc() {
        console.log(a); // --> Inner Scope
    }
    
    return innerFunc;
}

let innerFunc = outerFunc();
innerFunc();




6. *IIFE   JS Immediately-Invoked Function Expressions *("IIFE")*.
(function (a) {
    return (function (b) {
        console.log(a);
    })(1);
})(0);

let increase = (function () {
    let i = 0;
    return function () {
        i++;
        console.log(`current counter is ${i}`);
        return i;
    };
})();

increase();
increase();
increase();





7. Multiple Declarations, and Utilizations / Usages.

let count = 0; //the global 'count' // --> Global Scope.

(function () {
    if (count === 0) { the global 'count' // --> Function Scope.
        let count = 1; the local 'count'  // --> If Scope.
        console.log(count); // the local 'count'
    }
    console.log(count); // - the global 'count'
})();





8. Invoking Multiple Closures
function createCounter() {
    let i = 0;
  return function () {
    i++;
    return i;
    };
}

let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1());
console.log(increase1());

console.log(increase2());
console.log(increase2());




9. Returning Functions

 function createCounter() {
    let count = 0;
    function increase() {
        count++;
    }
    let message = `Count is ${count}`;

  function log() {
      console.log(message);
    }

  return [increase, log];
}

const [increase, log] = createCounter();
increase();
increase();
increase();
log();

function createCounter() {
  let count = 0;
  function increase() {
    count++;
}

  function log() {
    let message = `Count is ${count}`;
    console.log(message);
}

return [increase, log];
}
const [increase, log] = createCounter();
increase();
log();

increase();
log();

increase();
log();




10. Closure with asynchronous

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
      console.log(i);
    }, 0);
}

 The above code is equivalent to ^^^:

var i = 0;
setTimeout(function() {
    console.log(i);
}, 0)

i = 1;
setTimeout(function() {
    console.log(i);
}, 0)

i = 2;
setTimeout(function() {
    console.log(i);
}, 0)

i = 3;
setTimeout(function() {
    console.log(i);
}, 0)


i = 4;
setTimeout(function() {
    console.log(i);
}, 0)

i = 5






for (var i = 0; i < 5; ++i) {
    setTimeout(function() {
        console.log(i);
    }, 0)
};

 

the above code is equivalent to ^^^:
var i = 0;
(function(cacheI){setTimeout(function(){
    console.log(cacheI);
},0)})(i)

i = 1;
(function(cacheI){setTimeout(function(){
  console.log(cacheI);
},0)})(i)

i = 2;
(function(cacheI){setTimeout(function(){
    console.log(cacheI);
},0)})(i)

i = 3;
(function(cacheI){setTimeout(function(){
    console.log(cacheI);
},0)})(i)

i = 4;
(function(cacheI){setTimeout(function(){
    console.log(cacheI);
},0)})(i)


*/
