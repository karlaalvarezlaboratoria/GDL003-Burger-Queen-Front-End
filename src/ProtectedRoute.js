import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
    return (
        <Route
            {...rest}
            render={props => {
                if (tokenHeader !== 'Bearer undefined') {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    }
                    />
                }
            }}
        />
    );
};