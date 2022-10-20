import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.element}
              />
            )
          );
        })}
        <Route path="/" element={<Redirect to="dashboard" replace />} />
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
