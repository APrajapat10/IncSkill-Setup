import React, { useEffect } from "react";
import { useFormik } from "formik";
import csc from "country-state-city";
import Select from "react-select";
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

const Mentorship = () => {
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
    },
    onSubmit: (values) => console.log(values),
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
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio2"
                  value="no"
                  label="No"
                  defaultChecked={values.disability === "No"}
                  onChange={() => setFieldValue("disability", "No")}
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio3"
                  value="not disclose"
                  label="Do not wish to disclose"
                  defaultChecked={values.disability === "not disclose"}
                  onChange={() => setFieldValue("disability", "not disclose")}
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
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  label="Female"
                  checked={values.gender === "female"}
                  onChange={() => setFieldValue("gender", "female")}
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  label="Other"
                  checked={values.gender === "other"}
                  onChange={() => setFieldValue("gender", "other")}
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="notDisclose"
                  value="not disclose"
                  label="Do not wish to disclose"
                  checked={values.gender === "not disclose"}
                  onChange={() => setFieldValue("gender", "not disclose")}
                />
              </CCol>
            </fieldset>
            <CFormLabel htmlFor="country">Country</CFormLabel>
            <Select
              id="country"
              name="country"
              label="country"
              options={updatedCountries}
              value={values.country}
              onChange={(value) => setFieldValue("country", value)}
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
            ></Select>
            <br></br>
            <CFormSelect
              id="industry"
              label="Industry/work you are interested in"
              value={Formik.values.industry}
              onChange={Formik.handleChange}
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
              *
            </CFormLabel>
            <CFormInput
              type="text"
              placeholder="Current Job Position"
              aria-label="Current Job Position"
              id="currentJobPosition"
              onChange={Formik.handleChange}
              value={Formik.values.currentJobPosition}
            />
            <br></br>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                What would you like to sign up as?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="mentorship"
                  id="mentee"
                  value="mentee"
                  label="Mentee"
                  checked={values.signUpAs === "mentee"}
                  onChange={() => setFieldValue("signUpAs", "mentee")}
                />
                <CFormCheck
                  type="radio"
                  name="mentorship"
                  id="mentor"
                  value="mentor"
                  label="Mentor"
                  checked={values.signUpAs === "mentor"}
                  onChange={() => setFieldValue("signUpAs", "mentor")}
                />
                <CFormCheck
                  type="radio"
                  name="mentorship"
                  id="both"
                  value="Both"
                  label="Both"
                  checked={values.signUpAs === "both"}
                  onChange={() => setFieldValue("signUpAs", "both")}
                />
              </CCol>
            </fieldset>
            <CButton type="submit">Submit Application</CButton>
            <p>{JSON.stringify(csc.get)}</p>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Mentorship;
