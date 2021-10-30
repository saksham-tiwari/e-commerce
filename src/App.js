import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Forgot from "./components/Forgot";
import Login from "./components/Login";
import SignUp from "./components/SignUp";




function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login">
          <Login/>
      </Route>
      <Route exact path="/forgot-password">
          <Forgot/>
      </Route>
      <Route exact path="/signup">
          <SignUp/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
