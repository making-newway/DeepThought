import React, { createContext, useReducer } from "react";
import Reducer, { initialState } from "../Reducer/Reducer";


export const AuthContext = createContext();

const AuthState = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }} > {children} </AuthContext.Provider>
    )
}

export default AuthState