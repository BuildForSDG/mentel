import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login/Login";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
         <Route path="/" exact component ={LandingPage} />
         <Route path="/login"  component ={Login} />
         <Route path="/signup"  component ={SignUp} />

      </Switch>  

      </BrowserRouter>
      
    </div>
  );
}

export default App;
