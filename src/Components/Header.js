import React, { useContext, useEffect } from 'react';
import { Nav } from 'reactstrap';
import { AuthContext } from '../Context/AuthContext';

function Header() {

    const { state } = useContext(AuthContext);

    useEffect(() => {
        console.log(state);
    })


    return (
        <div>
            <Nav id="nav">
                <a href="/"><h1 className="App-logo">Songz</h1></a>
                {state.user && (
                    <h1>Hi {state.user.firstName}</h1>
                )}
            </Nav>
        </div>
    )
}

export default Header