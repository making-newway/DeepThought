const ROOT_URL = "https://hookedbe.herokuapp.com/api"

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {

        let response = await fetch(`${ROOT_URL}/login`, requestOptions);
        let data = await response.json();

        if (data.user) {
            let pay = { success: data.success, token: data.token, firstName: data.user.firstName, lastName: data.user.lastName };
            console.log(pay);
            dispatch({ type:'LOGIN', payload: pay })
            localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        }
        
    } catch (error) {
        return null;
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}
