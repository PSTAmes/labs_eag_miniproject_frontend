
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/PopularProducts";
import Cart from "./pages/Cart";
import CartsList from "./pages/CartsList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Home}></Route> 
       <Route  path="/cart"><Cart/></Route>
       <Route  path="/cartslist"><CartsList/></Route>
       <Route  path="/login" component={Login}><Login/></Route>
       <Route  path="/signup" component={Register}></Route>
       <Route  path="/product"><Product/></Route>
       <Route path="/productlist"><ProductList/></Route>
     </Switch>

  </Router>);
};

export default App;