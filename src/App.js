import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { useAuthListner } from "./hooks";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
function App() {
  const {user} =useAuthListner();
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNUP}
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
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}
export default App;
