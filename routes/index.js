const express = require("express");
const router = express.Router();
const client = require("../config/connection");

router.post("/", (req, res) => {
  const id = req.body.id;
  const text = req.body.text;

  client.hmset(id, ["id", id, "text", text, "like", 0, "dislike", 0], function(
    err,
    reply
  ) {
    if (err) {
      res.status(500).json({
        CODE: "FAILED"
      });
    } else {
      res.status(201).json({
        CODE: "CREATED"
      });
    }
  });
});

router.put("/put/:id", (req, res) => {
  const id = req.params.id;
    const text = req.body.text;
    const like = 0;
    const dislike = 0;
    

  client.hmset(id, ["id", id, "text", text, "like", like, "dislike", dislike], function(
    err,
    reply
  ) {
    if (err) {
      res.status(500).json({
        CODE: "FAILED"
      });
    } else {
      res.status(201).json({
        CODE: "CREATED"
      });
    }
  });
});



router.get("/get/:id", (req, res) => {
  const id = req.params.id;
  
  client.hgetall(id, function(err, obj) {
    if (!obj) {
      res.status(500).json({
        CODE: "FAILED"
      });
    } else {
      data = obj;
        res.status(201).json(data);
       
    }
  });
    

     
});


router.delete("/del/:id", (req, res) => {
  const id = req.params.id;

  client.del(id, function(err, reply) {
    if (err) {
      res.status(500).json({
        CODE: "FAILED"
      });
    } else {
      res.status(200).json({
        CODE: "DELETED"
      });
    }
  });
});



module.exports = router;
