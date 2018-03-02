const path = require('path');

const clientEntry = path.join(__dirname, 'client', 'src', 'index.jsx');
const distPath = path.join(__dirname, 'client', 'dist');

const webpackConfig = {
    entry: clientEntry,
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-class-properties'],
                    presets: ['env', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = webpackConfig;