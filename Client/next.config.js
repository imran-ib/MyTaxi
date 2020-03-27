const withImages = require('next-images');

module.exports = {
  env: {
    GRAPHQL_URL: 'http://localhost:4444/',
  },
};
module.exports = withImages();
