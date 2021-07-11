import React, { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { logout } from "../Reducer/Action";

const initialState = {
    songs: [],
    isFetching: false,
    hasError: false,
};


const songReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SONGS_REQUEST":
        return {
            ...state,
            isFetching: true,
            hasError: false
        };
        case "FETCH_SONGS_SUCCESS":
        return {
            ...state,
            isFetching: false,
            songs: action.payload
        };
        case "FETCH_SONGS_FAILURE":
        return {
            ...state,
            hasError: true,
            isFetching: false
        };
        default:
        return state;
    }
};

export const Home = (props) => {

    const { state: authState, dispatch: authDispatch } = useContext(AuthContext);

    const [state, dispatch] = useReducer(songReducer, initialState);

    
    const handleLogout = () => {
        logout(authDispatch);
        
        props.history.push('/login');
    }

    useEffect(() => {
        dispatch({
            type: "FETCH_SONGS_REQUEST"
        });

        fetch("https://hookedbe.herokuapp.com/api/songs", {
                headers: { Authorization: `Bearer ${authState.token}` }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            })
            .then(resJson => {
                console.log(resJson);

                dispatch({
                    type: "FETCH_SONGS_SUCCESS",
                    payload: resJson
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: "FETCH_SONGS_FAILURE"
                });
        });
    }, [authState.token]);

    return (
        <React.Fragment>
            <div className="dashboard">
                <div className="logout">
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
                <div className="home">
                    {state.isFetching ? (
                        <span className="loader">LOADING...</span>
                    ) : [state.hasError ? (
                            <span className="error">AN ERROR HAS OCCURED</span>
                            ) : (
                            <>
                            {state.songs.length > 0 &&
                                state.songs.map(song => (
                                <Card key={song.id.toString()}>
                                    <CardImg top width="100%" src={song.albumArt} alt="" />
                                    <CardBody className="content">
                                        <CardTitle tag="h2">{song.name}</CardTitle>
                                        <CardSubtitle>BY {song.artist}</CardSubtitle>
                                    </CardBody>
                                </Card>
                                ))}
                            </>
                            ) 
                        ]
                    }
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;