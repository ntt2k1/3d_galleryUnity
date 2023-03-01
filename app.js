const http = require('http');
const express = require('express');
const body = require('body-parser');
const compression = require('compression');
const path = require('path');
const port = process.env.port || 1300;
const app = express();
const clientFolder = path.join(__dirname, '/UnityRelease');
 const  { json, urlencoded } = body

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(express.static(clientFolder));
app.use(defaultRoute);
 
http
    .createServer(app)
    .listen(port);
 
function defaultRoute(req, response) {
    response.sendfile(clientFolder + '/index.html');
}