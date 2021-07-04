import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Groceries from './Components/Groceries';
import Basket from './Components/Basket';

function App() {
    return (
        <div className="App">
            <Header />
            <section>
                <Groceries />
                <Basket />
            </section>
        </div>
    );
}

export default App;
