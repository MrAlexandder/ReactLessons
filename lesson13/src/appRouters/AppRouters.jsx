import React, {Component} from "react";
import Main from "../pages/Main/Main";
import {Route, Routes} from "react-router";
import Authorization from "../pages/Authorization/Authorization";
import Overview from "../pages/Overview/Overview";

class AppRouters extends Component {


  render() {
    const {state, toggleForm, setActiveTab, buyCard} = this.props;

    return (
      <Routes>
        <Route path="/" element={
          <Overview/>
        } />
        <Route path="auth/:isRegistration" element={
          <Authorization
            auth={state.auth}
            toggleForm={toggleForm}
          />
        } />
        <Route path="main" element={
          <Main
            state={state}
            setActiveTab={setActiveTab}
            buyCard={buyCard}
          />
        } />
      </Routes>
    )
  }
}

export default AppRouters;