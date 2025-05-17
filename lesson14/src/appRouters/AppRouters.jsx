import React, {Component} from "react";
import Main from "../pages/Main/Main";
import {Route, Routes} from "react-router";
import Authorization from "../pages/Authorization/Authorization";
import Overview from "../pages/Overview/Overview";

class AppRouters extends Component {
  render() {
    const {store} = this.props;

    return (
      <Routes>
        <Route path="/" element={
          <Overview/>
        } />
        <Route path="auth/:isRegistration" element={
          <Authorization
            auth={store.auth}
            toggleForm={store.toggleForm}
          />
        } />
        <Route path="main" element={
          <Main
            state={store.main}
            setActiveTab={store.setActiveTab}
            buyCard={store.buyCard}
          />
        } />
      </Routes>
    )
  }
}

export default AppRouters;