import './App.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Intro from "./Components/Intro";
import Login from "./Components/Login";
import LoginHeader from './Components/LoginHeader';
import Signup from "./Components/SignUp";
import Forgot from "./Components/Forgot";
import AppHeader  from "./Components/AppHeader";
import Home from "./Components/Home";
import ForYou from './Components/ForYou';
import Browse from './Components/Browse';
import YourLibrary from './Components/YourLibrary';
import Player from './Components/Player';
import Footer from "./Components/Footer";

function App() {
  return (
<Router>
<Switch>
<Route path="/home">
  <AppHeader/>
  <div className="bigcontainer1">
  <div className="leftcontainer">
  <Home/>
  </div>
  <div className="rightcontainer">
    <Player/>
  </div>
  </div>
  <Footer/>
</Route>
<Route path="/yourlibrary">
  <AppHeader/>
  <div className="bigcontainer1">
  <div className="leftcontainer">
  <YourLibrary/>
  </div>
  <div className="rightcontainer">
    <Player/>
  </div>
  </div>
  <Footer/>
</Route>
<Route path="/foryou">
  <AppHeader/>
  <div className="bigcontainer1">
  <div className="leftcontainer">
  <ForYou/>
  </div>
  <div className="rightcontainer">
    <Player/>
  </div>
  </div>
  <Footer/>
</Route>
<Route path="/browse">
  <AppHeader/>
  <div className="bigcontainer1">
  <div className="leftcontainer">
  <Browse/>
  </div>
  <div className="rightcontainer">
    <Player/>
  </div>
  </div>
  <Footer/>
</Route>
<Route path="/forgot">
   <LoginHeader/>
   <Forgot/>
   <Footer/>
  </Route>
<Route path="/signup">
   <LoginHeader/>
   <Signup/>
   <Footer/>
  </Route>
  <Route path="/signin">
   <LoginHeader/>
   <Login/>
   <Footer/>
  </Route>
  <Route path="/">
   <LoginHeader/>
   <Intro/>
   <Footer/>
  </Route>
</Switch>
</Router>
  );
}

export default App;
