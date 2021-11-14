import React, { useEffect, useState } from 'react'
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

import { UserProvider, useUpdateUser } from './contexts/UserContext';
import { EmailProvider } from "./contexts/EmailContext";
import { ObjectProvider } from "./contexts/ObjectContext";
import { PushProvider } from "./contexts/PushContext";
import { AllowProvider } from "./contexts/AllowedContext"


function App() {

  const [isKeys, setIsKeys]= useState(false);
  useEffect(() => {
    if(localStorage.getItem("keys")!==null){
      setIsKeys(true);
    }
  }, []);
  const updateUser = useUpdateUser();
  function checkUser(){
    // const updateUser = useUpdateUser();
    console.log("checking");
    isKeys?updateUser(true):updateUser(false);
  }
  return (
    <UserProvider>
    <EmailProvider>
    <ObjectProvider>
    <PushProvider>
    <AllowProvider>
      <Router>
        {/* <NavBar/> */}


        <Switch>
          <Route exact path="/">
        {()=>{checkUser()}}

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
    </AllowProvider>
    </PushProvider>
    </ObjectProvider>
    </EmailProvider>
    </UserProvider>
  );
}

export default App;
