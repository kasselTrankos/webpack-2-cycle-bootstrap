const express = require('express');
const app = express();

    // I extracted some logic to another file; more on that in a moment
const webpackDevHelper = require('./index.dev.js');
// ...presumably lots of other stuff...
// we only want hot reloading in development
if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    console.log('PRODUCTION ENVIRONMENT');

    //Production needs physical files! (built via separate process)
    app.use('/js', express.static(__dirname + '/public/js'));
}

// ...presumably lots of other stuff...

// Start your express server as usual
app.listen(3000, ()=> {
  console.log('estamos aquí');
});
