const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const dbpath = path.join(__dirname, "db.json");
const router = jsonServer.router(dbpath)
const middlewares = jsonServer.defaults()
const jsf = require('json-schema-faker');

const rewriterFile = require('./routes.json');

//db.json make seed
jsf.extend('faker', () => require('faker'));
const mockDataSchema = require('./mockDataSchema.js');
const fs = require('fs');
const json = JSON.stringify(jsf.generate(mockDataSchema));
fs.writeFileSync(dbpath, json, function (err) {
    if (err) {
        return console.log('-----error-----', err);
    } else {
        console.log("Mock data generated.");
    }
});

server.use(middlewares)
server.use(jsonServer.rewriter(rewriterFile))

server.use(router)
server.listen(8080, () => {
    console.log('JSON Server is running')
})