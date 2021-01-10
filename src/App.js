import React from 'react'
import './App.css';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//AIzaSyBGL6Gyjd29JzegM3LswvuRss_XPmkkjNg
//33751b15939c23a78
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
