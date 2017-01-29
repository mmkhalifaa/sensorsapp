import path from "path";
import merge from "webpack-merge";
import webpack from "webpack";
import * as parts from "./parts";
import pkg from "../package.json";

export const PATHS = {
    APP: path.join(__dirname, "../app"),
    STYLES: path.join(__dirname, "../style"),
};

export default merge(
    {
        devtools: "cheap-module-source-map",
        resolve: {
            extensions: ["", ".js", ".jsx"],
            alias: {
                "react": path.join(__dirname, "../node_modules/react"),
                "react-dom": path.join(__dirname, "../node_modules/react-dom"),
            },
            symlinks: false,
        },
        output: {
            filename: "[name].js",
            chunkFilename: "[name].chunk.js",
        },
        plugins: [
            new webpack.NoErrorsPlugin(),
        ],
    },
    parts.bundleExtraction({
        name: "vendor",
        entries: Object.keys(pkg.dependencies),
    }),
    parts.reactPerformanceUtils(),
    parts.indexGeneration({
        title: "Converge Frontend Exercice",
        appMountId: "app",
    }),
    parts.styleLoader(PATHS.STYLES),
    parts.jsonLoader(PATHS.JSON)
);



