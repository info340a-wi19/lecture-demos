'use strict';

let myForm = document.querySelector('form');

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); //don't you do it, I'll do it!

    let input = document.querySelector('#queryInput');
    let queryInput = input.value;

    console.log("searching for '"+queryInput+"'");

    let uri = 'https://api.github.com/search/repositories'+'?q='+queryInput;

    // //send the request for data!
    // let ticket = fetch(uri);
    // let updatedTicket = ticket.then(function(response) { //when my number is called
    //     //log out the HTTP response
    //     //have data here
    //     console.log(response);
    //     let encodingTicket = response.json() //"open the envelope", encode the body as JSON
    //     return encodingTicket; //this updates the ticket
    // })
    // updatedTicket.then(function(data){
    //     console.log(data);
    //     //renderTable(data)
    // })


    fetch(uri)
        .then(function(response) { //when my number is called
            return response.json(); //this updates the ticket
        })
        .then(function(data){
            console.log(data);
            //renderTable(data)
        })
        .catch(function(error) {
            console.log(error);
        })

    console.log("sent data");


    //for stage 2
    fetch("data/mydata.json").then(...)


});
