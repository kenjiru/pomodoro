const webpack = require('webpack');
const merge = require('webpack-merge');
const { config, APP_PATH } = require('./webpack.common');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: APP_PATH,
        openPage: '',
        open: true,
        port: 9999,
        stats: 'minimal',
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /mobx-react\/native/,
            "mobx-react",
        ),
    ],
});
