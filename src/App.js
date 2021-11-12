import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePassword from "./components/auth/ChangePassword";
import Forgot from "./components/auth/Forgot";
import Login from "./components/auth/Login";
import NavBar from "./components/Navbar";
import SignUp from "./components/auth/SignUp";
import Otp from "./components/auth/Otp";
import Home from "./components/layout/Homepage/Home";
import Wishlist from "./components/layout/Wishlist/Wishlist";
import Footer from "./components/layout/Footer";
import Cart from "./components/layout/Cart/Cart";
import ProductsPage from "./components/layout/ProductsPage/ProductsPage";
import Checkout from "./components/layout/Checkout/Checkout";

import { UserProvider } from './contexts/UserContext';
import { EmailProvider } from "./contexts/EmailContext"


function App() {

  return (
    <UserProvider>
    <EmailProvider>
      <Router>
        {/* <NavBar/> */}

        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgot-password">
            <Forgot />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/change-password">
            <ChangePassword />
          </Route>
          <Route exact path="/otp">
            <Otp />
          </Route>
          <Route exact path="/wishlist">
            <NavBar />
            <Wishlist />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <NavBar />
            <Cart />
            <Footer />
          </Route>
          <Route exact path="/products-page">
            <NavBar />
            <ProductsPage />
            <Footer />
          </Route>
          <Route exact path="/checkout">
            <NavBar />
            <Checkout />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </EmailProvider>
    </UserProvider>
  );
}

export default App;
