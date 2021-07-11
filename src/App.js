import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

function App() {

    //const [state, dispatch] = useReducer(Reducer, initialState);
    const { state } = useContext(AuthContext);

    const AuthRoute = ({ component: Component, path, isPrivate, ...rest }) => {
        return (
            <Route
                path={path}
                render={props =>
                    isPrivate && !Boolean(state.token) ? (
                        <Redirect to={{ pathname: "/login" }} />
                    ) : (
                            <Component {...props} />
                        )
                    }
                {...rest}
            />
        )
    }

    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Switch>
                    <AuthRoute exact isPrivate={false} path="/login" component={Login} />
                    <AuthRoute exact isPrivate={true} path="/dashboard" component={Home} />
                    <AuthRoute exact isPrivate={true} path="/*" component={Home}/>
                </Switch>
                {/* {!state.isAuthenticated ? <Login /> : <Home />} */}
            </div>
        </BrowserRouter>
    );
}

export default App;
