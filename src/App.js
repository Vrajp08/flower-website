import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Reviews from './components/Reviews';

import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contacts from './components/Contacts';

function App() {
  return (

    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/review">
            <Reviews />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
