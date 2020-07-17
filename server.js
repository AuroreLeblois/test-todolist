//on require ce qu'il nous faut
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./api/router');

//on execute express
const app = express();
//on paramètre la view engine
app.set('view engine', 'ejs');
app.set('views', 'web/views');
//on utilise le body parser et param le dossier du css
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(router);
//on creer le serveur 
const server = http.createServer(app);
const port = 3000;
//on lance
server.listen(port);
console.debug('Server listening on port ' + port);