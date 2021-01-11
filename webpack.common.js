const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
     entry: "./src/index.js",
     output: {
          filename: 'script.js',
          path: path.resolve(__dirname, 'build_webpack')
     },
     module: {
          rules: [
               {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                         loader: 'babel-loader'
                    }
               },
               {
                    test: /\.css$/,
                    use: [
                      {
                        loader: 'style-loader',
                      },
                      {
                        loader: 'css-loader',
                      },
                    ],
                  },
                  {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: [
                      'file-loader',
                    ],
                  },
                  {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
                  },
          ]
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: path.resolve(__dirname, './public/index.html'),
               filename: 'index.html',
          }),
          new CopyWebpackPlugin({
               patterns:[
                    {
                         from: path.resolve(__dirname, './public/assets_public'),
                         to: path.resolve(__dirname, 'build_webpack/assets_public')
                    },
                    {
                         from: path.resolve(__dirname, './src/assets_src'),
                         to: path.resolve(__dirname, 'build_webpack/assets_src')
                    },
               ]
          }),
     ]
}