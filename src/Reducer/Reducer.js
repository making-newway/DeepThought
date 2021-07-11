let userData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
let tokenData = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;

export const initialState = {
    isAuthenticated: false,
    user: null || userData,
    token: null || tokenData
};

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOGIN":
            let user = { firstName: action.payload.firstName, lastname: action.payload.lastname };

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: JSON.stringify(user),
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
};

export default Reducer;