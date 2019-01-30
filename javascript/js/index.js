'use strict';

//JavaScript goes here!
console.log("JavaScript Day 2");

// // sayHello("class");

// // let sayHello = function(person) {
// //     console.log("Hello, "+person);
// //  }


// sayGoodbye("class");

// function sayGoodbye(name) {
//     console.log("See you later, "+ name);
// }

// //defining doWorld
// function doWorld(aFunction) {
//     aFunction("world");
//  }

// //calling doWorld
// doWorld(function(name) {
//     console.log("See you later, "+ name);
// })

// sayGoodbye("world")


//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

// function() {
//     console.log('pat your head');
// }

function() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(
    function() {
        console.log('pat your head');
    }, 
    function() {
        console.log('rub your belly');
    }
);


var array = ['a','b','c'];
var printItem = function(item) {
   console.log(item);
}

//for(item : array) {
// console.log(item)    
//}

for(item of array){
    console.log(item);
}

array.forEach(function(item) {
   console.log(item);
});
