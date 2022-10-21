import React from "react";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import { useHistory } from "react-router-dom";
const ThankYouPage = () => {
  const history = useHistory();
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h4 className="pt-3">Thank you for signing up as a Mentee</h4>
            </div>

            <CButton
              color="primary"
              onClick={() => history.push("/mentorship")}
            >
              Back to Mentorship Page
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ThankYouPage;
