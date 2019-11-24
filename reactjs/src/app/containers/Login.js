import React from "react";
import LoginForm from "../Forms/LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userobject: ""
    };
  }
  render() {
    return (
      <div className="section-wrap">
        <div className="section">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
