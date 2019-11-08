module.exports = app => {
  const router = require("express").Router();
  const mongoose = require("mongoose");

  const Article = mongoose.model("Article");


  router.get("/articles", async (req, res) => {
    const items = await Article.find();
    res.send(items);
  });

  //文章详情
  router.get("/articles/:id", async (req, res) => {
    const data = await Article.findById(req.params.id).lean();
    // data.related = await Article.find()
    //   .where({
    //     categories: { $in: data.categories }
    //   })
    res.send(data);
  });

  app.use("/web/api", router);
};
