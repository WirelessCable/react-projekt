import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AddMovie extends Component {
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
                            flexDirection: "column",
                            position: "fixed",
                            overflow: "scroll",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            rowGap: 50,
                            }}>

                <h1 style={{color: "white"}}>
                    /add
                </h1>
                <h5 style={{color: "white"}}>
                    Page has not been created yet.
                </h5>

                <Link className="btn btn-primary btn-lg" to="/" role="button" style={{color: "white",
                                                                                      backgroundColor: "orange",
                                                                                      borderStyle: "none"}}>
                    Back to main page
                </Link>

            </div>
        </div>
    }
}

export default AddMovie;