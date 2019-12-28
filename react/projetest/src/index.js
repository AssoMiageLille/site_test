import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Federation from "./Federation";
import Formation from "./Formation";
import Presentation from "./Presentation";
import Contact from "./Contact";
import Event from "./Event";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                render={props => <Presentation {...props} />}/>
            <Route
                path="/contact"
                exact
                render={props => <Contact {...props} />}
            />
            <Route
                path="/event"
                exact
                render={props => <Event {...props} />}
            />
            <Route
                path="/federation"
                exact
                render={props => <Federation {...props} />}
            />
            <Route
                path="/formation"
                exact
                render={props => <Formation {...props} />}
            />
            <Route
                path="/presentation"
                exact
                render={props => <Presentation {...props} />}
            />



        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
