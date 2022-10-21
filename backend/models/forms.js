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
  deaf: String,
  SpecificLearningDisabilities: String,
  hardOfHearing: String,
  blindness: String,
  muscularDystrophy: String,
  cerebralPalsy: String,
  orthopedicDisability: String,
  speechDisability: String,
  leprosy: String,
  lowVision: String,
  acidAttack: String,
  dwarfism: String,
  mentalIllness: String,
  slowLearners: String,
  autism: String,
  location: String,
  mentorDisability: String,
  mentorGender: String,
  mentorOccupation: String,
  skills: String,

  skillsDescrpn: String,
  experience: Number,
  qualities: String,
  extraInfo: String,

  introduction: String,
  contact: Number,
  agreement: String,
});
module.exports = User = mongoose.model("forms", FormSchema);
