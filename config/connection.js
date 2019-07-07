const redis = require("redis");
var client;

if (process.env.NODE_ENV === "production") {
  client = redis.createClient(process.env.REDISPORT, process.env.REDISHOST);
  client.auth(process.env.REDISPASSWORD);
} else {
  client = redis.createClient();
}

module.exports = client;
