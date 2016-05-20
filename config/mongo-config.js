var MONGO_CONFIG = {
  "connection" : process.env.MONGOLAB_URI ||  'mongodb://localhost/dgg-simple-api',
  "test" : 'mongodb://localhost/dgg-simple-api'
}

module.exports = MONGO_CONFIG;
