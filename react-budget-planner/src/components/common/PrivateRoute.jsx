import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const privateRoute = (props) => {
        if (localStorage.getItem('authToken') === null) {
            return <Redirect to="/login" />;
        };

        return (
            <Route {...props}>
                {props.children}
            </Route>
        );
}

export default privateRoute;