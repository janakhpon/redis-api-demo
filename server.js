const express = require("express");
const bodyParser = require("body-parser");
const client = require('./config/connection');
const router = require('./routes');

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

app.use('/api', router);


port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ==> http://localhost:${port}`);
});
