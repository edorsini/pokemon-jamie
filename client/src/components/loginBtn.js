import React from "react";
import API from "../utils/API";


class Login extends React.Component{
  render(){
    return (
      <a href="/api/auth/google"><button className="btn btn-primary">Login</button></a>
    );
  
  }
}
export default Login;