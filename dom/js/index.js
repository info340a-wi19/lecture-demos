'use strict';

// let DATA = {
//     username: "Joel",
//     cookieType: "Chocolate Chip",
// }

// DATA = fetch(data)




/* DOM */
//select elements
let theH1 = document.querySelector('h1')
console.log(theH1);

//change content
theH1.innerHTML = "A <em>brand new</em> title"; //be careful!

//change class
theH1.classList.add("text-success");
theH1.classList.add("coolest-class-ever");

//change style
theH1.style.marginTop = "1em";

//change attributes
let img = document.querySelector('img');
console.log(img);
//img.src = "img/husky.jpg";

//add new elements
let newListItem = document.createElement('li') //new <li>
newListItem.innerHTML = '<a href="https://ischool.uw.edu/">iSchool again</a>'

let list = document.querySelector('ul');
list.appendChild(newListItem);

function renderCookie() {
    let cookieImg = document.createElement('img');
    cookieImg.src = "img/cookie.png";
    cookieImg.alt = "A yummy cookie";

    let jar = document.querySelector('#cookie-jar');
    jar.appendChild(cookieImg);
}

function renderCookies(number, arg) {
    if(arg === undefined) {
        //...
    }

    for(let i=0; i<number; i++){
        renderCookie();
    }
}

let button1 = document.querySelector('#button1');

let whatToDo = function() {
    console.log("clicky clicky");
}

button1.addEventListener('click', function() {
    console.log("clicky clicky");
    renderCookies(10);

});


let state = {
    isPuppy: true,
    cookieCount: 0
}

img.addEventListener('click', function() {
    if(state.isPuppy) {
        img.src = 'img/husky.jpg';        
        state.isPuppy = false;
    } else {
        img.src = 'img/puppy.jpg';        
        state.isPuppy = true;
    }
})












/* "Closure lecture" */

// //immmediately-invoked anonymous function (IIAF)
// //we don't do this
// (function() {})()

// function foo(whatToDo, targetsArray) {

//     let encourage = function(target) {
//         console.log(target+", you're the best!");
//     }

//     if(whatToDo === "greet"){

//         let greetings = ["hi", "hello", "howdy"];
//         targetsArray.forEach(function(target) {
//             greetings.forEach(function(greeting){
//                 console.log(greeting + " "+ target);
//             })
//         })

//         // result = greet(target);
//     } else {
//         result = encourage(targetsArray);
//     }



//     // console.log(result);  
// }

// //this functions creates functions that greet people

// let greeting = "An outside greeting";

// function makeGreeter(greeting){

//     let aGreetingFunction = function(target) {
//         console.log(greeting + " " + target);
//     }

//     return aGreetingFunction;
// }

// //aGreetingFunction("outside");

// //foo("greet", ["world", "class", "day", "dog"]);

// let returnedFunction = makeGreeter("hello");
// let hiGreeter = makeGreeter("hi");
// let yoGreeter = makeGreeter("yo");


// hiGreeter("you");
// yoGreeter("me");

// //makeGreeter("hi");

// (function(target) {
//     console.log(greeting + " " + target);
// })("anonymous person") //call this function