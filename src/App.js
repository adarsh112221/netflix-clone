import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
export default App;
