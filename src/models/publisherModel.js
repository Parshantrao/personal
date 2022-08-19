const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const publisherModel = new mongoose.Schema(
  {
    name: { type: String },
    headQuarter: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Publisher",publisherModel)
