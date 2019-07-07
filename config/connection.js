const redis = require("redis");
var client;

if (process.env.NODE_ENV === "production") {
  client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
  client.auth(process.env.REDIS_PASSWORD);
} else {
  client = redis.createClient();
}

module.exports = client;
