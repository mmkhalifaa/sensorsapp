import React, { Component } from "react";
import { Router, browserHistory } from "react-router";
import Layout from "./layout";
import Sensors from "./sensors/sensors";

const rootRoute = {
    childRoutes: [{
        path: "/",
        component: Layout,
        indexRoute: { onEnter: (nextState, replace) => replace("/sensors") },
        childRoutes: [
            {
                path: "sensors",
                component: Sensors,
            },
        ],
    }],
};

const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== "") {
        setTimeout(() => {
            const id = hash.replace("#","");
            const element = document.getElementById(id);
            if (element) element.scrollIntoView;
        }, 0);
    }
};

export default class Root extends Component {
    render() {
        return <Router history={browserHistory} routes={rootRoute} onUpdate={hashLinkScroll} />;
    }
}

