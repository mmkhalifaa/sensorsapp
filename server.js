import path from "path";
import webpack from "webpack";
import express from "express";
import devMiddleware from "webpack-dev-middleware";
import hotMiddleware from "webpack-hot-middleware";
import config from "./webpack/dev.config";

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler,{
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: "errors-only",
}));

app.use(hotMiddleware(compiler));

app.get("*", (req, res, next) => {
    const filename = path.join(compiler.outputPath, "index.html");
    compiler.outputFileSystem.readFile(filename, (err,result) => {
        if(err) {
            return next(err);
        }
        res.set("content-type", "text.html"),
        res.send(result);
        res.end();
    });
});

/* eslint-disable no-console */
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Listenning at http://localhost:3000/");
});
/* eslint-disable no-console */

