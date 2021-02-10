import React from "react";
import DiaryHome from "./pages/Home/DiaryHome";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <DiaryHome />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
