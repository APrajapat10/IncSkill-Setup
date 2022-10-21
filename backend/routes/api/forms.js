const express = require("express");
const router = express.Router();
// Load Form model
const Form = require("../../models/Forms");

router.post("/submitMentorshipForm", async (req, res) => {
  const { values, userId } = req.body;
  const formData = await Form.create({
    userId: userId,
    disability: values.disability,
    gender: values.gender,
    country: values.country,
    state: values.state,
    city: values.city,
    industry: values.industry,
    currentJobPosition: values.currentJobPosition,
    signUpAs: values.signUpAs,

    deaf: values.deaf,
    SpecificLearningDisabilities: values.SpecificLearningDisabilities,
    hardOfHearing: values.hardOfHearing,
    blindness: values.blindness,
    muscularDystrophy: values.muscularDystrophy,
    cerebralPalsy: values.cerebralPalsy,
    orthopedicDisability: values.orthopedicDisability,
    speechDisability: values.speechDisability,
    leprosy: values.leprosy,
    lowVision: values.lowVision,
    acidAttack: values.acidAttack,
    dwarfism: values.dwarfism,
    mentalIllness: values.mentalIllness,
    slowLearners: values.slowLearners,
    autism: values.autism,
  });
  return res.status(200).json(formData);
});

module.exports = router;
