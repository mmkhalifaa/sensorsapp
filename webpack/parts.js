import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export const bundleExtraction = (options) => {
    const entry = {};
    const { name, entries } = options;
    entry[name] = entries;
    return {
        entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [name, "manifest"],
            }),
        ],
    };
};

export const reactPerformanceUtils = () => ({
    modules: {
        loaders:[
            {
                test: require.resolve("react"),
                loaders: ["expose?React"],
            },
        ],
    },
});

export const indexGeneration = options => ({
        plugins:[
           new HtmlWebpackPlugin({
                template: "node_modules/html-webpack-template/index.ejs",
                inject: false,
                title: options.title,
                appMountId: options.appMountId,
            }),
        ],
});

export const linter = include => ({
    module: {
        preloaders:[
            {
                test: /\.jsx?$/,
                loaders: ["eslint"],
                include, 
            },
        ],
    },
});

export const styleLoader = include => ({
    module: {
        loaders:[
            {
                test: /\.(s?)css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackloader: "style-loader",
                    loader: ["css-loader", "resolve-url-loader", "sass-loader?sourceMap"],
                }),
                include,
            },
        ],
        plugins: [
            new ExtractTextPlugin("[name].[chunkhash].css"),
        ],
    },
});

export const jsonLoader = include => ({
    module: {
        loaders:[
            {
                test: /\.json$/,
                loaders: "json",
                include, 
            },
        ],
    },
});
