// Create Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpportunitiesFormSchema = new Schema({
  userId: String,
  seeking: String,
  nature: String,
  industry: String,
  position: String,
  qualification: String,
  degree: String,
  major: String,
  workExp: String,
  prevExp: String,

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
  relocation: String,

  linkedin: String,
  portfolio: String,

  needHelp: String,
  url: String,
});
module.exports = Opportunities = mongoose.model(
  "opportunitiesForm",
  OpportunitiesFormSchema
);
