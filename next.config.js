const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const conf = {
  cssModules: true,
  webpack(config) {
    return commonsChunkConfig(config, /\.(sass|scss|css)$/);
  },
};

module.exports = withSass(withImages(withCss(conf)));
