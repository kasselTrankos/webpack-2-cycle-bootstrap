const webpack = require('webpack'),
    path = require('path'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackconfig = require('./webpack.config.js'),
    webpackcompiler = webpack(webpackconfig);

const useWebpackMiddleware = (app, express) => {
    app.use(express.static(__dirname + '/dist'));
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: webpackconfig.output.publicPath,
        hot:true,
        stats: {
            colors: true,
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));
    app.get('*', (req, res)=> {
      console.log(' out from the same path');
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
    return app;
}
module.exports = {
    useWebpackMiddleware: useWebpackMiddleware
};
