'use strict';

//reference elements
let p = $('header p');

//modify elements
console.log("the text is:", p.text());
p.text("I have been modified");
console.log("the text is:", p.text());

let ball = $('circle');
// ball.attr('cx', 225).attr('cy', 95);
ball.attr({'cx':225, 'cy': 95})

let paragraphs = $('p'); //always a "selectAll"
paragraphs.addClass('text-success')
paragraphs.toggleClass("text-success")
//$('section').css('background-color', 'blue');


//create new elements
// let newP = document.createElement('p');
// newP.textContent = "Hi I'm new"

let newP = $("<p>Hi I'm <strong>new</strong></p>");
$('header').prepend(newP)
$('<p>End of section</p>').appendTo('section')

//add interaction
// let buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', function() {
//     console.log("clicky clicky");
// })

$('button').click(function() {
    console.log("clicky clicky");
})

$('p').click(function(event) {
    console.log(event.target); //DOM element
    let target = $(event.target) //now a jQuery selection
    target.addClass('text-danger');
})

$('img')
    .mouseenter(function(event){
        $(event.target).attr('src', 'img/surprised.png')
    })
    .mouseleave(function(event){
        $(event.target).attr('src', 'img/happy.png')
    })

$('h1').click(function(event) {
    $(event.target).slideUp(1000);
})

$('circle').click(function(event){
    let ball = $(event.target);
    ball.animate( {cx:415, cy: 320}, 1000);
})