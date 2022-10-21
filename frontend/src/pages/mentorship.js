import React from "react";
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
          <CForm>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Are you a person with disability ?
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="gridRadios1"
                  id="gridRadios1"
                  value="yes"
                  label="Yes"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="gridRadios2"
                  id="gridRadios2"
                  value="no"
                  label="No"
                />
                <CFormCheck
                  type="radio"
                  name="gridRadios3"
                  id="gridRadios3"
                  value="not disclose"
                  label="Donot wish to disclose"
                />
              </CCol>
            </fieldset>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <CCol sm={10}>
                <CFormCheck
                  type="radio"
                  name="male"
                  id="male"
                  value="male"
                  label="Male"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="female"
                  id="female"
                  value="female"
                  label="Female"
                />
                <CFormCheck
                  type="radio"
                  name="other"
                  id="other"
                  value="other"
                  label="Other"
                />
                <CFormCheck
                  type="radio"
                  name="notDisclose"
                  id="notDisclose"
                  value="not disclose"
                  label="Donot wish to disclose"
                />
              </CCol>
            </fieldset>
            <CFormSelect id="inputCountry" label="Country">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
            <br></br>
            <CFormSelect id="inputState" label="State">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
            <br></br>
            <CFormSelect id="inputCity" label="City">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
            <br></br>
            <CFormSelect
              id="industry"
              label="Industry/work you are interested in"
            >
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
            <br></br>
            <CFormLabel htmlFor="exampleFormControlTextarea1">
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
            <CButton type="submit">Submit Application</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Mentorship;
