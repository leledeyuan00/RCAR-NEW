module.exports = app => {
  const express = require("express");
  const router = express.Router();

  const Article = require("./../../models/Article");

  router.post("/articles", async (req, res) => {
    const model = await Article.create(req.body);
    res.send(model);
  });
  router.put("/articles/:id", async (req, res) => {
    const model = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/articles/:id", async (req, res) => {
    const model = await Article.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });

  router.get("/articles", async (req, res) => {
    const items = await Article.find().limit(10);
    res.send(items);
  });
  router.get("/articles/:id", async (req, res) => {
    const model = await Article.findById(req.params.id);
    res.send(model);
  });


  app.use("/admin/api", router);
};
