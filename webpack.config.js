const path = require('path');

module.exports = {
  // mode: "production",

  //le mode development c'est pour utilise le source map
  mode: 'development',
  
  watch: true,
  
  entry: {
    app: "./index.js"
  },
  
  output: {
    path: path.resolve("./dist"),
    filename: "app.bundle.js"
  },
  
  devtool:"cheap-module-source-map",

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    },
      // {
      //   test: /\.scss/,
      //   loader: ExtractTexPlugin.extract(
      //     {
      //       fallback: "style-loader",
      //       use:['css-loader','sass-loader']
      //     }
      //   )
      
      // }
    ]



  },
  experiments: {
    topLevelAwait: true,
  }
}