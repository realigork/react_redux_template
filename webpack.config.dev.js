// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// module.exports = {
//   entry: [
//     'webpack-hot-middleware/client',
//     './src/index.js'
//   ],
//   output: {
//     path: path.resolve(__dirname, 'dist'), //resolves the absolute path
//     filename: '[name].bundle.js', //
//     publicPath: '/'
//   },
//   devtool: 'inline-source-map',

//   module: {
//       rules: [
//           {
//               test: /\.css$/,
//               use: ['style-loader', 'css-loader'] //to use the CSS imported - in your index.js file you
//           },
//           {
//               test: /\.scss$/,
//               use: ['style-loader', 'css-loader', 'sass-loader']
//           },
//           {
//               test: /\.(jpg|png|svg|gif)$/,
//               use:['file-loader']
//           },
//           {
//               test: /\.(woff|woff2|eot|ttf|otf)$/,
//               use: ['file-loader']
//           },
//           {
//               test: /\.js$/,
//               loader: 'babel-loader',
//               query: {
//                   presets: ['env', 'react']
//               }

//           }
//       ]
//   },
//   plugins:[
//       new HtmlWebpackPlugin({
//           title: 'African Banker Awards 2018',
//           template: './app/scripts/libs/template.ejs',
//           inject: 'body'
//       }),
//       new CleanWebpackPlugin(['dist']),
//       new webpack.HotModuleReplacementPlugin()
//   ]
// };


var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]--[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('postcss-import')]
              }
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};
