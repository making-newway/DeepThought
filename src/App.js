import React from "react";
import './App.css';
import MyComponent from './MyComponent';

function App() {
    return (
        <div className="App">
        <MyComponent headerText="A list of paragraph tags">
            <p>First child.</p>
            <p>Any other <span>number</span> of children...</p>
        </MyComponent>
        </div>
    );
}

export default App;
