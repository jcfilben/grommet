import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      { from: './README.md' },
      { from: './package.json' },
      { from: './tools', to: 'tools' },
    ],
  }),
];

export default {
  devtool: 'hidden-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet.min.js',
    libraryTarget: 'var',
    library: 'Grommet',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    extensions: ['.js', '.json'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
