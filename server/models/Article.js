const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  ismenu: { type: Boolean },
  submenus: [
    {
      name: { type: String },
      body: { type: String }
    }
  ],
  isdisable: { type: Boolean },
  islocked: { type: Boolean }
});

module.exports = mongoose.model("Article", schema);
