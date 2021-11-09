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
import Otp from "./components/auth/Otp";
import Home from "./components/layout/Homepage/Home";
import Wishlist from "./components/layout/Wishlist/Wishlist";
import Footer from "./components/layout/Footer";




function App() {
  return (
    <Router>
      {/* <NavBar/> */}

      <Switch>
      <Route exact path="/">
          <NavBar/>
          <Home/>
          <Footer/>

      </Route>
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
      <Route exact path="/otp">
          <Otp/>
      </Route>
      <Route exact path="/wishlist">
          <NavBar/>
          <Wishlist/>
          <Footer/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
