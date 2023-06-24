const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id: { type: ObjectId, default: new ObjectId() }, // Add _id field with ObjectId
      name: String,
      description: String,
      price: Number,
      published: Boolean,
      category: String
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Products = mongoose.model("products", schema);
  return Products;
};
