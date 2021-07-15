import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.HOME}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}
export default App;
