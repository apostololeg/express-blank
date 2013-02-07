var   http = require('http')
    , express = require('./core/express.js')
    , app = express.app;

// настройка express
express.configure();

// запускаем сервер
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});