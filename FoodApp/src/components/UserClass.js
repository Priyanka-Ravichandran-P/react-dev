import React from "react";
import {USER_PROFILE_URL} from '../utils/constant';
import Shimmer from "./Shimmer";
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonName: "Login",
      user : {}
    };
  }
  async componentDidMount(){
   let data = await fetch(USER_PROFILE_URL);
   let json = await data.json();
   this.setState({
        user : json
   })
   
  }
 
  render() {
    const {avatar_url, name, location, html_url} = this.state.user
    return this.state.user === null ? <Shimmer/> :
     (
      <div className="text-red-600 font-semibold p-4">
        <img src={avatar_url}/>
        <h1>User Name: {name}</h1>
        <h2>Git Hub URL: {html_url}</h2>
        <h2>Location: {location}</h2>
        <button
          className="login-btn"
          onClick={() => {
            this.state.buttonName == "Login"
              ? this.setState({
                  buttonName: "Logout",
                })
              : this.setState({
                  buttonName: "Login",
                });
          }}
        >
          {this.state.buttonName}
        </button>
      </div>
    );
  }
}

export default UserClass;
