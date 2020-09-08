import React from 'react';
import ReactDOM from 'react-dom';
import Style from './App.css';
import Json from './data.json';
import Text from './data.txt';
import Mario from './icon.png';

console.log({ Style});
function App() {
    return (
        <div className="container">
            <h3 className="title">webpack example</h3>
            <div>{`name: ${Json.name}, age: ${Json.age}`}</div>
            <img src={Mario} />
            <div>{`text: ${Text}`}</div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));