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
import MyProfile from "./components/layout/Profile/MyProfile"
import Product from './components/layout/Product/Product';
import Dashboard from './components/layout/Dashboard/Dashboard';
import AddProducts from './components/layout/Dashboard/AddProducts/AddProducts';
import MyProducts from './components/layout/Dashboard/MyProducts/MyProducts';
import ProductsSearch from './components/layout/ProductsPage/ProductsSearch';
import OrderSuccess from './components/layout/OrderSuccess/OrderSuccess';
import Orders from './components/layout/Orders/Orders';

import { UserProvider, useUpdateUser } from './contexts/UserContext';
import { EmailProvider } from "./contexts/EmailContext";
import { ObjectProvider } from "./contexts/ObjectContext";
import { PushProvider } from "./contexts/PushContext";
import { AllowProvider } from "./contexts/AllowedContext";
import { SellerProvider } from "./contexts/SellerContext";
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';
import { PersonalProvider } from './contexts/PersonalContext';
import { SearchProvider } from './contexts/SearchContext';

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
    <SellerProvider>
    <CartProvider>
    <WishlistProvider>
    <AuthProvider>
    <PersonalProvider>
    <SearchProvider>
      <Router>
        {/* <NavBar/> */}


        <NavBar/>
        <br/>
        <Switch>
          <Route exact path="/">
          
            {()=>{checkUser()}}

          <Home />
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
            <Wishlist />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products-page">
            <ProductsPage />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/profile">
            <MyProfile />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
            <AddProducts/>
          </Route>
          <Route exact path="/dashboard/add-products">
            <Dashboard />
            <AddProducts/>
          </Route>
          <Route exact path="/dashboard/my-products">
            <Dashboard />
            <MyProducts/>
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/products/query=:query">
            <ProductsSearch />
          </Route>
          <Route exact path="/order-success/:txn_id">
            <OrderSuccess />
          </Route>
          <Route exact path="/orders">
            <Orders/>
          </Route>
        </Switch>
          <Footer/>
      </Router>
    </SearchProvider>
    </PersonalProvider>
    </AuthProvider>
    </WishlistProvider>
    </CartProvider>
    </SellerProvider>
    </AllowProvider>
    </PushProvider>
    </ObjectProvider>
    </EmailProvider>
    </UserProvider>
  );
}

export default App;
