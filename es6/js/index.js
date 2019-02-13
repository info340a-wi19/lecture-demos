'use strict';

//pre-written messages
let MESSAGES = ["Hello world!", "Goodbye y'all", "silence", "...", "Bueller?"];

class Card {

    constructor(text) {
        this.text = text; //assign to field
        this.clickCount = 0;
    }

    //return a DOM representation of the card
    render() {


        let cardElement = document.createElement('div');
        cardElement.classList.add("card");
        cardElement.textContent = this.text+ " ("+this.clickCount+")";

        cardElement.addEventListener('click', () => {
            this.clickCount++;
            console.log("Event handler called on ", this);
            cardElement.textContent = this.text+ " ("+this.clickCount+")"; //update display
        });

        return cardElement;
    }

}


let card = new Card("Hello world");
console.log(card.text);

let cardElement = card.render()
let content = document.querySelector('#content')
content.appendChild(cardElement);

content.appendChild((new Card("Snow day!")).render());

let messageCards = MESSAGES.map((msg) => new Card(msg))

messageCards.forEach((card) => content.appendChild(card.render()))

// function foo() {
//     console.log("I was called on", this);
// }

// foo();

let foo = () => console.log("foo");

foo()

