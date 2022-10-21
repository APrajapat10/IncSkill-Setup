const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FormSchema = new Schema({
  userId: String,
  disability: String,
  gender: String,
  country: Object,
  state: Object,
  city: Object,
  industry: String,
  currentJobPosition: String,
  signUpAs: String,
});
module.exports = User = mongoose.model("forms", FormSchema);
