const express = require("express");
const bodyParser = require("body-parser");
const redis = require("redis");
var client;

if (process.env.NODE_ENV === "production") {
  client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
  client.auth(process.env.REDIS_PASSWORD);
} else {
  client = redis.createClient();
}

client.on("connect", function() {
  console.log("CONNECTED TO REDIS");
});

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT : ${port}`);
});
