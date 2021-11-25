import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Logo from '../resources/logo.png';

class Header extends Component {
    state = {};

    render(){
        return <div style={{display: "flex",
                            width: "100%",
                            height: 100,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "stretch",
                            padding: 12,
                            borderBottomStyle: "solid",
                            borderColor: "orange",
                            backgroundImage: "linear-gradient(to right, #ff3300 0%, #f0e000 100%)"
                            }}>
            <img src={Logo} />
            <p style={{color: "#770000", fontSize: 50, fontFamily: "Brush Script MT"}}>FilmLibrary</p>
            <SearchBar />
            <div>
            <button type="button" class="btn btn-primary" style={{height: 56,
                                                                    width: 120,
                                                                    backgroundColor: "orange",
                                                                    color: "#fffb8c",
                                                                    borderStyle: "none",
                                                                    borderRadius: 12}}>
                Log in</button>
            <button type="button" class="btn btn-primary" style={{height: 56,
                                                                    width: 120,
                                                                    backgroundColor: "#ffe95a",
                                                                    color: "orange",
                                                                    marginLeft: 4,
                                                                    borderColor: "orange",
                                                                    borderRadius: 12}}>
                Register</button>
            </div>
        </div>
    }
}

export default Header;