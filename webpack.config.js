require('dotenv').config();

const fs = require('fs'),
  path = require('path');

const nodeExternals = require('webpack-node-externals');

const envConstant = require('./app/Constants/EnvConstant'),
  appConfig = require('./config/app');

const bundleDir = path.join(__dirname, 'bundle');
fs.readdirSync(bundleDir).forEach((file) => {
  if (file != '.gitkeep') {
    fs.unlinkSync(path.join(bundleDir, file));
  }
});

const resolveMode = () => {
  if ([envConstant.LOCAL, envConstant.DEV].includes(appConfig.env)) {
    return 'development';
  }

  if ([envConstant.STAGE, envConstant.PROD].includes(appConfig.currentEnv)) {
    return 'production';
  }

  return 'none';
};

module.exports = {
  mode: resolveMode(),
  entry: {
    index: path.join(__dirname, 'public', 'index.js'),
  },
  output: {
    hashFunction: 'md5',
    hashDigestLength: 32,
    path: path.join(__dirname, 'bundle'),
    filename: `${appConfig.name}-bundle.js`,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  target: 'node16.14',
};
