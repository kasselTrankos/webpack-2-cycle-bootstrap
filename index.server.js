const express = require('express'),
  app = express(),
  router = express.Router(),
  webpackDevHelper = require('./index.dev.js');

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    webpackDevHelper.useWebpackMiddleware(app, express);

} else {
    console.log('PRODUCTION ENVIRONMENT');
    app.use('/js', express.static(__dirname + '/public/js'));
}

app.listen(3000, ()=> {
  console.log('estamos aquí');
});
