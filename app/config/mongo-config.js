var MONGO_CONFIG = {
  "connection" : process.env.MONGOLAB_URI ||  'mongodb://localhost/dgg-simple-api'
}

module.exports = MONGO_CONFIG;
