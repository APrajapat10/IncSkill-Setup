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
  const addressFromik = useFormik({
    initialValues: {
      country: "United States",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
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

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

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
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio2"
                  value="no"
                  label="No"
                />
                <CFormCheck
                  type="radio"
                  name="nameRadio"
                  id="nameRadio3"
                  value="not disclose"
                  label="Do not wish to disclose"
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
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  label="Female"
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  label="Other"
                />
                <CFormCheck
                  type="radio"
                  name="gender"
                  id="notDisclose"
                  value="not disclose"
                  label="Do not wish to disclose"
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
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false);
              }}
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
              onChange={(value) => {
                setValues({ state: value, city: null }, false);
              }}
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
            >
              <option>Engineering and Architecture</option>
              <option>Sales and Marketing</option>
              <option>Hospitality and Event Planning</option>
              <option>Human Resources</option>
              <option>Logistics and Supply Chain Management</option>
              <option>Mathematics and Statistics</option>
              <option>Law</option>
              <option>Hospital and Healthcare</option>
              <option>Entertainment</option>
              <option>Social Sector and Non-profit</option>
              <option>Administration</option>
              <option>Journalism</option>
              <option>IT and Services</option>
              <option>Academia</option>
              <option>Natural Sciences</option>
              <option>Finance and Banking</option>
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
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="mentorship"
                  id="mentor"
                  value="mentor"
                  label="Mentor"
                />
                <CFormCheck
                  type="radio"
                  name="mentorship"
                  id="both"
                  value="Both"
                  label="Both"
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
