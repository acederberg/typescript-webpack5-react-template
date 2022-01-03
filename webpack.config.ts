const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: 'development',
    entry: {
      reactRefreshSetup: '@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
      main: './src/index.tsx',
    },
    devServer: {
      hot: true,
      port: 8080,
    },/*
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },*/
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
    },
    optimization: {
      runtimeChunk: 'single',
      // Ensure `react-refresh/runtime` is hoisted and shared
      // Could be replicated via a vendors chunk
      splitChunks: {
        chunks: 'all',
        name(_, __, cacheGroupKey) {
          return cacheGroupKey;
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.join(__dirname, 'src'),
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new ReactRefreshPlugin(),
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: './public/index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx' ],
    },
  };
};


