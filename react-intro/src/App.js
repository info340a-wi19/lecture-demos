import React, { Component } from 'react';

import {MessageList} from './Messages';

export default class App extends Component {
    // Your home base
    render() {

        let messages = [
            "It's not easy being me",
            "Green is the color of spring",
            "Frogs",
            "Caterpillar"
        ]

        console.log("I can do more work here!");
        let content = <MessageList messages={messages} />

        return (
            <div>
                {content} {/* This is a comment */}
            </div>
        );
    }
}