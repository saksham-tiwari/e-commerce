import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChangePassword from "./components/auth/ChangePassword";
import Forgot from "./components/auth/Forgot";
import Login from "./components/auth/Login";
import NavBar from "./components/Navbar";
import SignUp from "./components/auth/SignUp";




function App() {
  return (
    <Router>
      {/* <NavBar/> */}

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
      <Route exact path="/change-password">
          <ChangePassword/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
