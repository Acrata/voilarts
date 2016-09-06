  var path = require('path');
    module.exports = {
        entry: './js/app2.js',
        output: {
            path: './dist/js',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, 'es6'),
                  loader: 'babel-loader?presets[]=es2015' },

                { test: /\.scss$/,
                    loader: ['style','css','postcss','sass'] }
            ]
        },
        postcss: function(){
            return [lost,autoprefixer({
                browsers:['last 3 versions']
            })];
        }
    };
