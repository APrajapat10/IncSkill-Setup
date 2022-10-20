import React from "react";
import { CContainer, CHeader, CHeaderBrand, CHeaderNav } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppHeaderDropdown } from "./header/index";
import { logo } from "../../src/assets/brand/logo";

const AppHeader = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
