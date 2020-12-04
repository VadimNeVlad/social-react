import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/dialogs">
          <DialogsContainer />
        </Route>
        <Route path="/users">
          <UsersContainer />
        </Route>
      </div>
    </Router>
  );
};

export default App;
