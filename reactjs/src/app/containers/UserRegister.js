import React from "react";
import RegisterForm from "../Forms/RegisterForm";

class UserRegister extends React.Component {
  render() {
    return (
      <div className="section-wrap">
        <div className="section">
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default UserRegister;
