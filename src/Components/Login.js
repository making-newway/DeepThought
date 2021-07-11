import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { AuthContext } from "../Context/AuthContext";
import { loginUser } from "../Reducer/Action";


export const Login = (props) => {

    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
        if(state.token) {
            props.history.push('/dashboard');
        }
    }, []);

    const initialStates = {
        username: "",
        password: "",
        isDone: false,
        errorMessage: null
    };

    const [data, setData] = useState(initialStates);


    const handleInputChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };


    const handleFormSubmit = e => {
        e.preventDefault();
        setData({
            ...data,
            isDone: true,
            errorMessage: null
        });

        try {
            let payload = { username: data.username, password: data.password };

            let response = loginUser(dispatch, payload);

            if (!response.user) {
                return;
            }
            props.history.push('/dashboard');

        } catch (error) {
            setData({
                ...data,
                isDone: false,
                errorMessage: error.message || error.statusText
            });
        }

        // fetch("https://hookedbe.herokuapp.com/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ username: data.username, password: data.password })
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         dispatch({
        //             type: "LOGIN",
        //             payload: {...data}
        //         })
        //         props.history.push('/dashboard')
        //     })
        //     .catch(error => {
        //         setData({
        //             ...data,
        //             isDone: false,
        //             errorMessage: error.message || error.statusText
        //         });
        //     });

        console.log(data);
    };
    return (
        <div className="login-container">
            <Card>
                <Container>
                <Form onSubmit={handleFormSubmit}>
                    <h2>Login</h2>

                    <FormGroup>
                        <Label htmlFor="username"> Username </Label>
                        <Input type="text" value={data.username} onChange={handleInputChange} name="username" id="username" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password"> Password </Label>
                        <Input type="password" value={data.password} onChange={handleInputChange} name="password" id="password" />
                    </FormGroup>

                    <FormGroup>
                        {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                        )}
                    </FormGroup>

                    <Button color="primary" disabled={data.isDone}>
                        {data.isDone ? ( "Loading..." ) : ( "Login" )}
                    </Button>
                </Form>
                </Container>
            </Card>
        </div>
    );
};
export default Login;