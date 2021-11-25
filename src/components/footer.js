import React, { Component } from 'react';

class Footer extends Component {
    state = {};

    render(){
        return <div style={{display: "flex",
                            width: "100%",
                            height: 100,
                            position: "fixed",
                            bottom: 0,
                            right: 0,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "stretch",
                            padding: 12,
                            borderTopStyle: "solid",
                            borderColor: "orange",
                            backgroundImage: "linear-gradient(to left, #ff3300 0%, #f0e000 100%)"
                            }}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                            borderRadius: 25,
                            padding: 8,
                            borderColor: "orange",
                            borderStyle: "ridge",
                            }}>
                <p style={{color: "#ffe1a6"}}>
                    &copy; Rafał Bobka, 33149 <br />
                    Programowanie Reaktywne II
                </p>
            </div>
        </div>
    }
}

export default Footer;