import React, { Component } from "react";
import { Redirect } from "react-router";
import "linearicons";
import "./ma-form.css";
import Signup from './RegisterForm';
import Signin from './Login';

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <section id="landing">
        <div className="container" style={{ fontFamily: "Itim" }}>
          <div className="row ">
            <Signup />
            <div className="vertical"></div>
            {/* Login */}
            <Signin />
          </div>
        </div>
      </section>
    );
  }
}