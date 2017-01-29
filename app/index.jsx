import PerformanceUtils from "react-addons-perf";
import React from "react";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";
import Root from "./Root";

if (process.env.NODE_ENV !== "production") {
    React.Perf = PerformanceUtils;
}

const rootEl = document.getElementById("app");

ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept("./Root", () => {
        const NextRoot = require("./Root").default; 
        ReactDOM.render(
            <AppContainer>
                <NextRoot />
            </AppContainer>,
            rootEl
        );
    });
}

