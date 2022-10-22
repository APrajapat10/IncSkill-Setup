import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
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

const Opportunities = (props) => {
  const Formik = useFormik({
    initialValues: {
      seeking: "",
      nature: "",
      industry: "",
      position: "",
      qualification: "",
      degree: "",
      major: "",
      workExp: "",
      prevExp: "",

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
      relocation: "",

      linkedin: "",
      portfolio: "",

      needHelp: "",
    },
    onSubmit: (values) => {
      const userId = props.auth.user.id;
      axios
        .post("/api/forms/submitOpportunitiesForm", { values, userId })
        .then((res) => {
          history.push("/opportunities/formSubmitted");
        })
        .catch((err) => {
          console.log("Error while submitting Opportunities form ", err);
        });
    },
  });
  const history = useHistory();

  const { values, handleSubmit, setFieldValue } = Formik;

  useEffect(() => {}, [values]);
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Opportunities</CCardHeader>
        <CCardBody>
          <p>
            This service helps people with disabilities to submit their resumes
            and credentials for being considered for internship and full-time
            opportunities with our corporate partners. Please be as thorough as
            possible when completing the job opportunities form. Make sure that
            your resume is professional, grammatically correct and
            well-formatted. If you would like help with your resume or
            portfolio, please check the option at the end of the form to request
            such assistance. Note that IncSkill cannot guarantee this assistance
            and is totally contingent on the availability of a suitable
            mentor/job coach. Once you complete this form, IncSkill will share
            your details with our corporate partners who will reach out to you
            should there be a match. Know that completing this form does not
            guarantee any job whatsoever.
          </p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Are you seeking a job (internship or full-time) in the private
                sector?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="seeking"
                  id="seeking1"
                  value="yes"
                  label="Yes"
                  defaultChecked={values.seeking === "Yes"}
                  onChange={() => setFieldValue("seeking", "Yes")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="seeking"
                  id="seeking2"
                  value="no"
                  label="No"
                  defaultChecked={values.seeking === "No"}
                  onChange={() => setFieldValue("seeking", "No")}
                  required
                />
              </CCol>
            </fieldset>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Nature of job
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="nature"
                  id="internship"
                  value="internship"
                  label="Internship"
                  checked={values.nature === "internship"}
                  onChange={() => setFieldValue("nature", "internship")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="nature"
                  id="full-time"
                  value="full-time"
                  label="Full-time"
                  checked={values.nature === "full-time"}
                  onChange={() => setFieldValue("nature", "full-time")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="nature"
                  id="both"
                  value="both"
                  label="Both"
                  checked={values.nature === "both"}
                  onChange={() => setFieldValue("nature", "both")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            <CFormSelect
              id="industry"
              label="Industry you want to work in"
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
            <CFormLabel>
              What is your ideal position in this industry (e.g. software
              engineer, product manager, CA, accessibility tester, marketing
              manager, IT manager etc.)? Feel free to mention multiple roles
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Position"
              aria-label="position"
              id="position"
              onChange={Formik.handleChange}
              value={Formik.values.position}
              required
            />
            <br></br>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Highest Educational Qualification
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="qualification"
                  id="10th"
                  value="10th"
                  label="10th std"
                  checked={values.qualification === "10th"}
                  onChange={() => setFieldValue("qualification", "10th")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="qualification"
                  id="12th"
                  value="12th"
                  label="12th std"
                  checked={values.qualification === "12th"}
                  onChange={() => setFieldValue("qualification", "12th")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="qualification"
                  id="grad"
                  value="Graduate"
                  label="Graduate degree"
                  checked={values.qualification === "grad"}
                  onChange={() => setFieldValue("qualification", "grad")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="qualification"
                  id="postGrad"
                  value="Postgraduate"
                  label="Postgraduate degree"
                  checked={values.qualification === "postgrad"}
                  onChange={() => setFieldValue("qualification", "postgrad")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            <CFormLabel>
              Highest degree (e.g. B. Com, B.A., MBA, CA, CFA, none etc.) *
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Degree"
              aria-label="degree"
              id="degree"
              onChange={Formik.handleChange}
              value={Formik.values.degree}
              required
            />
            <br></br>
            <CFormLabel>
              Academic concentration/major (e.g. Computer Science, Mechanical
              Engineering, none etc.)
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Major"
              aria-label="major"
              id="major"
              onChange={Formik.handleChange}
              value={Formik.values.major}
              required
            />
            <br></br>
            <CFormSelect
              id="workExp"
              label="Total Work Experience"
              value={Formik.values.workExp}
              onChange={Formik.handleChange}
              required
            >
              <option value="0">0 years</option>
              <option value="1">0-2 years</option>
              <option value="3">2-5 years</option>
              <option value="7">5-10 years</option>
              <option value="11">10+ years</option>
            </CFormSelect>
            <br></br>
            <CFormLabel>Relevant Work Experience</CFormLabel>
            <CFormInput
              type="text"
              placeholder="Previous Experience"
              aria-label="prevExp"
              id="prevExp"
              onChange={Formik.handleChange}
              value={Formik.values.prevExp}
              required
            />
            <br></br>
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
            <br></br>
            <CFormLabel>Where are you currently based?</CFormLabel>
            <CFormInput
              type="text"
              placeholder="City/State"
              aria-label="location"
              id="location"
              onChange={Formik.handleChange}
              value={Formik.values.location}
              required
            />
            <br></br>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Are you willing to relocate for the job if expected?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="relocation"
                  id="yes"
                  value="yes"
                  label="Yes"
                  checked={values.relocation === "yes"}
                  onChange={() => setFieldValue("relocation", "yes")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="relocation"
                  id="no"
                  value="no"
                  label="No"
                  checked={values.relocation === "no"}
                  onChange={() => setFieldValue("relocation", "no")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            <CFormLabel>Link to your LinkedIn profile if available</CFormLabel>
            <CFormInput
              type="text"
              placeholder="Link"
              aria-label="link"
              id="linkedin"
              onChange={Formik.handleChange}
              value={Formik.values.linkedin}
            />
            <br></br>
            <CFormLabel>Link to your Portfolio if available</CFormLabel>
            <CFormInput
              type="text"
              placeholder="Link"
              aria-label="portfolio"
              id="portfolio"
              onChange={Formik.handleChange}
              value={Formik.values.portfolio}
            />
            <br></br>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Do you need help improving your resume or developing a career
                plan?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="needHelp"
                  id="yes"
                  value="yes"
                  label="Yes"
                  checked={values.needHelp === "yes"}
                  onChange={() => setFieldValue("needHelp", "yes")}
                  required
                />
                <CFormCheck
                  type="radio"
                  name="needHelp"
                  id="no"
                  value="no"
                  label="No"
                  checked={values.needHelp === "no"}
                  onChange={() => setFieldValue("needHelp", "no")}
                  required
                />
              </CCol>
            </fieldset>
            <br></br>
            <CButton type="submit">Submit Form</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};
Opportunities.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Opportunities);
