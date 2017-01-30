import path from "path";
import webpack from "webpack";
import express from "express";
import devMiddleware from "webpack-dev-middleware";
import hotMiddleware from "webpack-hot-middleware";
import config from "./webpack/dev.config";

const app = express();
const compiler = webpack(config);
const sensors = require("./sensors.json");
const data = require("./data.json");

function findById(obj, key, val) {
    var objects = [];
    for (const i in obj) {
        if (typeof obj[i] === "object") {
            objects = objects.concat(findById(obj[i], key, val));
        } else if (i === key && obj[i] === val || i === key && val === "") { 
                objects.push(obj);
            } 
    }
    return objects;
}

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: "errors-only",
}));

app.use(hotMiddleware(compiler));

app.get("/", (req, res, next) => {
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

app.get("/api/sensors/", function (req, res) {
    res.json(sensors);
});

app.get("/api/sensors/:sensorsId", function (req, res) {
    const sensorsData = findById(data,"sensorId", req.params.sensorsId);
    res.json(sensorsData);
});

/* eslint-disable no-console */
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Listenning at http://localhost:3000/");
});
/* eslint-disable no-console */

