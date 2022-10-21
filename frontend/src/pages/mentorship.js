import React, { useEffect } from "react";
import { useFormik } from "formik";
import csc from "country-state-city";
import Select from "react-select";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CFormCheck,
  CFormSelect,
  CCol,
  CFormLabel,
  CFormInput,
} from "@coreui/react";

const Mentorship = (props) => {
  const Formik = useFormik({
    initialValues: {
      disability: "",
      gender: "",
      country: "",
      state: null,
      city: null,
      industry: null,
      currentJobPosition: "",
      signUpAs: "",
      deaf: "",
      SpecificLearningDisabilities: "",
      hardOfHearing: "",
      blindness: "",
      muscularDystrophy: "",
      cerebralPalsy: "",
      orthopedicDisability: "",
      speechDisability: "",
      leprosy: "",
      lowVision: "",
      acidAttack: "",
      dwarfism: "",
      mentalIllness: "",
      slowLearners: "",
      autism: "",
      location: "",
      mentorDisability: "",
      mentorGender: "",
      mentorOccupation: "",

      skills: "",
      skillsDescrpn: "",
      experience: null,
      qualities: "",
      extraInfo: "",

      introduction: "",
      contact: null,
      agreement: "",
    },
    onSubmit: (values) => {
      const userId = props.auth.user.id;
      axios
        .post("/api/forms/submitMentorshipForm", { values, userId })
        .then((res) => {
          console.log("Mentorship form submission succeeded. Res: ", res);
        })
        .catch((err) => {
          console.log("Error while submitting Mentorship form ", err);
        });
    },
  });
  const countries = csc.getAllCountries();
  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  const { values, handleSubmit, setFieldValue } = Formik;

  useEffect(() => {}, [values]);
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Mentorship</CCardHeader>
        <CCardBody>
          <p>
            Complete this form to sign up for a meeting with a mentor in the
            next two weeks, or as a mentor to share your knowledge, experience
            and skills with a mentee. Each meeting is typically 45 Mins. long.
            If you are a mentee, you can sign up for a match every other week.
            If you are a mentor, you only need to submit this once, and may
            update your response or pause mentorship temporarily using this
            page.
          </p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Are you a person with disability ?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio1"
                  value="yes"
                  label="Yes"
                  defaultChecked={values.disability === "Yes"}
                  onChange={() => setFieldValue("disability", "Yes")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio2"
                  value="no"
                  label="No"
                  defaultChecked={values.disability === "No"}
                  onChange={() => setFieldValue("disability", "No")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio3"
                  value="not disclose"
                  label="Do not wish to disclose"
                  defaultChecked={values.disability === "not disclose"}
                  onChange={() => setFieldValue("disability", "not disclose")}
                  required
                />
              </CCol>
            </fieldset>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  label="Male"
                  checked={values.gender === "male"}
                  onChange={() => setFieldValue("gender", "male")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  label="Female"
                  checked={values.gender === "female"}
                  onChange={() => setFieldValue("gender", "female")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  label="Other"
                  checked={values.gender === "other"}
                  onChange={() => setFieldValue("gender", "other")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="notDisclose"
                  value="not disclose"
                  label="Do not wish to disclose"
                  checked={values.gender === "not disclose"}
                  onChange={() => setFieldValue("gender", "not disclose")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            {values.disability === "Yes" && (
              <div>
                <CFormLabel htmlFor="disabilityNature">
                  What is the nature of your disability?{" "}
                </CFormLabel>
                <CFormCheck
                  name="flexCheckDefault"
                  label="Hearing impaired: deaf"
                  value="Hearing impaired: deaf"
                  onChange={() => setFieldValue("deaf", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Specific learning disabilities"
                  value="Specific learning disabilities"
                  onChange={() =>
                    setFieldValue("SpecificLearningDisabilities", "yes")
                  }
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Hearing Impaired: hard of hearing"
                  value="Hearing Impaired: hard of hearing"
                  onChange={() => setFieldValue("hardOfHearing", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Blindness"
                  value="Blindness"
                  onChange={() => setFieldValue("blindness", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Muscular dystrophy"
                  value="Muscular dystrophy"
                  onChange={() => setFieldValue("muscularDystrophy", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Cerebral Palsy"
                  value="Cerebral Palsy"
                  onChange={() => setFieldValue("cerebralPalsy", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Locomotor including Orthopedic Disability
"
                  onChange={() => setFieldValue("orthopedicDisability", "yes")}
                  value="Locomotor including Orthopedic Disability"
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Speech and language disability
"
                  onChange={() => setFieldValue("speechDisability", "yes")}
                  value="Speech and language disability
"
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Leprosy Cured"
                  value="Leprosy Cured"
                  onChange={() => setFieldValue("leprosy", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Low Vision"
                  value="Low Vision"
                  onChange={() => setFieldValue("lowVision", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Acid Attack victims"
                  value="Acid Attack victims"
                  onChange={() => setFieldValue("acidAttack", "yes")}
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Dwarfism"
                  value="Dwarfism"
                  onChange={() => setFieldValue("dwarfism", "yes")}
                />
                <CFormCheck
                  id="flexCheckDefault"
                  label="Mental Illness
"
                  onChange={() => setFieldValue("mentalIllness", "yes")}
                  value="Mental Illness
"
                />
                <CFormCheck
                  name="flexCheckDefault"
                  onChange={() => setFieldValue("slowLearners", "yes")}
                  label="Intellectual Disability/Slow Learners"
                  value="Intellectual Disability/Slow Learners"
                />
                <CFormCheck
                  name="flexCheckDefault"
                  label="Autism spectrum disorder"
                  value="Autism spectrum disorder"
                  onChange={() => setFieldValue("autism", "yes")}
                />
              </div>
            )}
            <br></br>
            <CFormLabel htmlFor="country">Country</CFormLabel>
            <Select
              id="country"
              name="country"
              label="country"
              options={updatedCountries}
              value={values.country}
              onChange={(value) => setFieldValue("country", value)}
              required
            ></Select>
            <br></br>
            <CFormLabel htmlFor="state">State</CFormLabel>
            <Select
              label="State"
              id="state"
              name="state"
              options={updatedStates(
                values.country ? values.country.value : null
              )}
              value={values.state}
              onChange={(value) => setFieldValue("state", value)}
              required
            ></Select>
            <br></br>
            <CFormLabel htmlFor="city">City</CFormLabel>
            <Select
              label="City"
              id="city"
              name="city"
              options={updatedCities(values.state ? values.state.value : null)}
              value={values.city}
              onChange={(value) => setFieldValue("city", value)}
              required
            ></Select>
            <br></br>
            <CFormSelect
              id="industry"
              label="Industry/work you are interested in"
              value={Formik.values.industry}
              onChange={Formik.handleChange}
              required
            >
              <option value="Engineering and Architecture">
                Engineering and Architecture
              </option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Hospitality and Event Planning">
                Hospitality and Event Planning
              </option>
              <option value="Human Resources">Human Resources</option>
              <option value="Logistics and Supply Chain Management">
                Logistics and Supply Chain Management
              </option>
              <option value="Mathematics and Statistics">
                Mathematics and Statistics
              </option>
              <option value="Law">Law</option>
              <option value="Hospital and Healthcare">
                Hospital and Healthcare
              </option>
              <option value="Entertainment">Entertainment</option>
              <option value="Social Sector and Non-profit">
                Social Sector and Non-profit
              </option>
              <option value="Administration">Administration</option>
              <option value="Journalism">Journalism</option>
              <option value="IT and Services">IT and Services</option>
              <option value="Academia">Academia</option>
              <option value="Natural Sciences">Natural Sciences</option>
              <option value="Finance and Banking">Finance and Banking</option>
            </CFormSelect>
            <br></br>
            <CFormLabel htmlFor="Current Job Position">
              What is your current job position? (e.g. student at IIT Delhi,
              software engineer at Intel, Secretary in Ministry of Health etc.)
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Current Job Position"
              aria-label="Current Job Position"
              id="currentJobPosition"
              onChange={Formik.handleChange}
              value={Formik.values.currentJobPosition}
              required
            />
            <br></br>
            <CFormLabel>
              What of the following are important to you while being matched
              with a mentee?{" "}
            </CFormLabel>
            <CFormCheck
              name="menteeImportant"
              label="Location"
              value="Location"
              onChange={() => setFieldValue("location", "yes")}
            />
            <CFormCheck
              name="menteeImportant"
              label="Disability"
              value="mentorDisability"
              onChange={() => setFieldValue("mentorDisability", "yes")}
            />
            <CFormCheck
              name="menteeImportant"
              label="Gender"
              value="mentorGender"
              onChange={() => setFieldValue("mentorGender", "yes")}
            />
            <CFormCheck
              name="menteeImportant"
              label="Sector/Occupation"
              value="mentorOccupation"
              onChange={() => setFieldValue("mentorOccupation", "yes")}
            />
            <br></br>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                What kind of skills do you want help with?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="skills"
                  id="hardSkills"
                  value="hardSkills"
                  label="Hard Skills"
                  checked={values.skills === "hardSkills"}
                  onChange={() => setFieldValue("skills", "hardSkills")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="skills"
                  id="softSkills"
                  value="softSkills"
                  label="Soft Skills"
                  checked={values.skills === "softSkills"}
                  onChange={() => setFieldValue("skills", "softSkills")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="skills"
                  id="both"
                  value="Both"
                  label="Both"
                  checked={values.skills === "both"}
                  onChange={() => setFieldValue("skills", "both")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            <CFormLabel>
              What skill(s) would you like to learn and/or connect about? In
              general, explain your mentorship request. (e.g. interview
              preparation, personal branding, basic software engineering,
              understanding stock markets etc.)
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Skills"
              aria-label="skillsDescrpn"
              id="skillsDescrpn"
              onChange={Formik.handleChange}
              value={Formik.values.skillsDescrpn}
              required
            />
            <br></br>
            <CFormLabel>
              Relevant work experience ( number of years ).
            </CFormLabel>
            <CFormInput
              type="number"
              placeholder="Experience"
              aria-label="experience"
              id="experience"
              onChange={Formik.handleChange}
              value={Formik.values.experience}
              required
            />
            <br></br>
            <CFormLabel>
              Are there specific qualities you want in your mentor other than
              what you have already indicated above? (e.g. a person with
              experience in Microsoft Excel, a person working at Facebook etc.)
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Qualities"
              aria-label="qualities"
              id="qualities"
              onChange={Formik.handleChange}
              value={Formik.values.qualities}
            />
            <br></br>
            <CFormLabel>
              Let us know anything else that will be helpful to match you.
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Extra Info"
              aria-label="extraInfo"
              id="extraInfo"
              onChange={Formik.handleChange}
              value={Formik.values.extraInfo}
            />
            <br></br>
            <CFormLabel>
              How would you like to be intro'd? Tell us whatever you'd like to
              share with your matches. (e.g. "I am Abc and am looking forward to
              learn about Xyz")
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Introduction"
              aria-label="introduction"
              id="introduction"
              onChange={Formik.handleChange}
              value={Formik.values.introduction}
            />
            <br></br>
            <CFormLabel>Provide your contact number.</CFormLabel>
            <CFormInput
              type="number"
              placeholder="Contact Number"
              aria-label="Contact Number"
              id="ContactNumber"
              onChange={Formik.handleChange}
              value={Formik.values.contact}
              required
            />
            <br></br>
            <CFormCheck
              name="agreement"
              label="By signing up as a mentee, I understand that I need help with the specific area indicated on this application within the next two weeks. I also agree that I will respect the mentor's time and will not reschedule or cancel unless absolutely necessary. If I miss or cancel meetings more than twice, I understand that I will lose access to this service.
"
              value="agreement"
              onChange={() => setFieldValue("agreement", "yes")}
              required
            />
            <br></br>
            <CButton type="submit">Submit Form</CButton>
            <p>{JSON.stringify(csc.get)}</p>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};
Mentorship.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Mentorship);
