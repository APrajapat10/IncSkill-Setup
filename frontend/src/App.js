import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "./scss/style.scss";
// Containers
const DefaultLayout = React.lazy(() =>
  import("./components/layout/DefaultLayout")
);

const Register = React.lazy(() => import("./components/auth/Register"));
const Login = React.lazy(() => import("./components/auth/Login"));
const PrivateRoute = React.lazy(() =>
  import("./components/private-route/PrivateRoute")
);
const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./components/errors/Page404"));
const Page500 = React.lazy(() => import("./components/errors/Page500"));
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="*" name="Home" element={DefaultLayout} />
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
