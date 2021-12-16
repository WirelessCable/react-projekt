import React, { Component } from 'react';

class SignIn extends Component {
    state = {};

    render(){
        return <div style={{display: "flex",
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

                <form style={{width: "30%"}}>
                      <div class="mb-3" style={{width: "100%"}}>
                            <label for="login" style={{color: "white"}} class="form-label">Login</label>
                            <input type="login" class="form-control" id="login" />
                      </div>
                      <div class="mb-3" style={{width: "100%"}}>
                            <label for="haslo" style={{color: "white"}} class="form-label">Password</label>
                            <input type="password" class="form-control" id="haslo" />
                      </div>
                      <button type="submit" class="btn btn-primary" style={{backgroundColor: "orange", borderStyle: "none", width: "100%"}}>Sign in</button>
                </form>

            </div>
        </div>
    }
}

export default SignIn;