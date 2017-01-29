import path from "path";
import merge from "webpack-merge";
import webpack from "webpack";
import base, { PATHS } from "./base.config";
import * as parts from "./parts";

export default merge(
    base,
    {
        entry: {
            app: [
                "react-hot-loader/patch",
                "webpack-hot-middleware/client",
                path.join(PATHS.APP, "index"),
            ],
        },
        output: {
            publicPath: "/static/",
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    query: {
                        plugins: ["react-hot-loader/babel"],
                    },
                    include: PATHS.APP,
                },
            ],
        },
    },
    parts.linter(PATHS.APP)
);
