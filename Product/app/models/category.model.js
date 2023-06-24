module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: {
      type: String,
      enum: ["Men", "Women", "Teens"],
      required: true
    }
  });

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Categories = mongoose.model("categories", schema);
  return Categories;
};
