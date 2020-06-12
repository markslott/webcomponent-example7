module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js"]
    },

    entry: ['@babel/polyfill','./reactApp/src/index.js'],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [['@babel/preset-env', {'targets' : { 'esmodules' : true}}], '@babel/preset-react']
                  }
                }
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
           
        ]
    },

    // // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "lightning/navigation": "lightning"
    //     // "react-dom": "ReactDOM"
    // }
};