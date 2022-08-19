const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: { type: String },
    author: { type: ObjectId, ref: "Author", require:true},
    price: { type: Number },
    ratings: { type: Number },
    publisher: { type: ObjectId, ref: "Publisher", require:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("LibraryBook", bookSchema);
