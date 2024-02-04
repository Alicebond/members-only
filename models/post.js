const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

PostSchema.virtual("url").get(function () {
  return `/home/post/${this._id}`;
});

module.exports = mongoose.model("Post", PostSchema);