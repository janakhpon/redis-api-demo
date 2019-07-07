const client = require("../config/connection");

const func = {
  add_set: function(data) {
    const id = data.id;
    const text = data.text;
    var flag = new Boolean(false);

    client.hmset(id, ["text", text, "like", 0, "dislike", 0], function(
      err,
      reply
    ) {
      if (err) {
        console.log("error while posting");
        flag = new Boolean(false);
      } else {
        console.log(reply);
        flag = new Boolean(true);
      }
    });

    if (flag) {
      return true;
    }
  },

  get_set: function(data) {
    const id = data.id;
    var flag = new Boolean(false);

    client.hgetall(id, function(
      err,
      obj
    ) {
      if (!obj) {
        console.log("error while posting");
        flag = new Boolean(false);
      } else {
        obj.id = id;
        data = obj;
        console.log(reply);
        flag = new Boolean(true);
      }
    });

    

    if (flag) {
      return true;
    }
  }


};

module.exports = func;
