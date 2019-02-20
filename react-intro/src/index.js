import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


//let message = new HelloMessage();

// let content = <em>This is content</em>;

// let message = (
//     <h1 id='hello' className='myClass'>
//         {content}
//     </h1>
// );

// let imagePath = "https://www.thesprucepets.com/thmb/IQGCoLl7dB6RaigKHDZbw3myQvg=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-if-a-spitz-pomeranian_t20_v3o29E-5ae9bbdca18d9e0037d95983.jpg"
// let image = <img src={imagePath} alt="a small dog" />


//show the content in the web page (inside #root)
ReactDOM.render(<App />, document.getElementById('root'));


/*
function ReactDOM.render(element, target) {
   let content = element.render()
    target.replaceWith(content)
}

*/