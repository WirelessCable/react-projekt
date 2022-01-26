import React, {Component} from "react";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const axios = require('axios');

class SignIn extends Component {

   state = {
       account: {
           username: "",
           password: ""
       },
       errors: {}
   };

   handleChangeRoute = () => {
//      this.props.history.push('/');
      useNavigate.navigate('/');
      window.location.reload();
   };

   validate = () => {
       const errors = {};

       const {account} = this.state;
       if (account.username.trim() === '') {
           errors.username = 'Username is required!';
       }
       if (account.password.trim() === '') {
           errors.password = 'Password is required!';
       }

       return Object.keys(errors).length === 0 ? null : errors;
   };

   handleSubmit = (event) => {
       event.preventDefault();

       const errors = this.validate();
       this.setState({errors: errors || {}});
       if (errors) return;

       console.log(this.state.account.username + " " + this.state.account.password);

       axios({
           method: 'post',
           url: 'https://pr-movies.herokuapp.com/api/user/auth',
           data: {
               "login": this.state.account.username,
               "password": this.state.account.password
           }
       }).then((response) => {
           localStorage.setItem('token', response.data.token);
           this.handleChangeRoute();
       }).catch((error) => {
           const errors = {};
           errors.password = 'Given username doesn\'t exists or password is wrong!';
           this.setState({errors: errors || {}});
           console.log(error);
       });
   };

   handleChange = (event) => {
       const account = {...this.state.account};
       account[event.currentTarget.name] = event.currentTarget.value;
       this.setState({account});
   };

   render() {
       return (
                           <div style={{display: "flex",
                                           zIndex: -1,
                                           width: "100%",
                                           height: "100%",
                                           position: "absolute",
                                           backgroundImage: "linear-gradient(to right bottom, #FF4444, orange, #FF4444)",
                                           position: "fixed",
                                           }}>
                           <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                                           display: "flex",
                                           zIndex: -1,
                                           width: "100%",
                                           height: "100%",
                                           position: "absolute",
                                           padding: 70,
                                           paddingTop: 110,
                                           paddingBottom: 110,
                                           flexWrap: "wrap",
                                           flexDirection: "row",
                                           position: "fixed",
                                           overflow: "scroll",
                                           justifyContent: "space-evenly",
                                           rowGap: 50,
                                           }}>
               <form style={{width: "30%"}} onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="login" style={{color: "white"}} class="form-label">Login</label>
                       <input value={this.state.account.username}
                              name="username"
                              onChange={this.handleChange}
                              type="text"
                              className="form-control"
                              id="username"
                              aria-describedby="emailHelp"
                              placeholder="Username"/>
                       {this.state.errors.username &&
                       <div className="alert alert-danger">{this.state.errors.username}</div>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="haslo" style={{color: "white"}} class="form-label">Password</label>
                       <input value={this.state.account.password}
                              name="password"
                              onChange={this.handleChange}
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"/>
                       {this.state.errors.password &&
                       <div className="alert alert-danger">{this.state.errors.password}</div>}
                   </div>
                   <button type="submit" class="btn btn-primary" style={{backgroundColor: "orange", borderStyle: "none", width: "100%", marginTop: 32}}>Sign in</button>
               </form>

           </div>
           </div>
       );
   }
}

export default SignIn;