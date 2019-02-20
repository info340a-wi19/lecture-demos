import React, {Component} from 'react';

export class GreenMessage extends Component {

    render() {

        console.log(this.props);

        let className = "bg-success"
        if(this.props.spacing) {
            className += " p-"+this.props.spacing;
        }

        console.log(className);

        return (
            <div className={className}>
                <h1>{this.props.text}</h1>
            </div>
        );
    }

}

export class PlainMessage extends Component {
    render() {
        return <h1>See you later!</h1>
    }
}

export class MessageList extends Component {
    render() {

        let messageComponentArray = this.props.messages.map((msgItem, idx) => {
            let aComponent = <GreenMessage text={msgItem} key={idx} />
            return aComponent;
        }) 

        console.log(messageComponentArray);

        return (
            <div>
                {messageComponentArray}
                <PlainMessage text="I'm plain" />
            </div>
        );
    }
}