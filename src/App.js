import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import Reddit from './Components/Reddit';
import Giphy from './Components/Giphy';

function App() {

    return (
        <div className="App">
            <Header path={window.location.href}/>
            <Switch>
                <Route exact path="/" component={Reddit} />
                <Route exact path="/giphy" component={Giphy} />
                <Route exact path="/reddit" component={Reddit} />
                <Route component={Reddit} />
                <Route path='*' component={Reddit} />
            </Switch>
        </div>
    );
}

export default App;
