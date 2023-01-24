const mongoose = require("mongoose");
//tables => Collections

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model('Category',categorySchema);