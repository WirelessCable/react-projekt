import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Logo from '../resources/logo.png';
import { Link } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

const Navbar = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));

    return (
        <div style={{display: "flex",
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
                    <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" style={{marginTop: -10}}>
                        <span style={{color: "#770000", fontSize: 50, fontFamily: "Brush Script MT"}}>FilmLibrary</span>
                    </Link>
                    <SearchBar />

                    <div style={{display: "flex", width: "20%"}}>
                        {isNotLoggedIn && <div style={{height: 56,
                                                                           width: 120,
                                                                           backgroundColor: "#ffe95a",
                                                                           color: "orange",
                                                                           marginLeft: 4,
                                                                           borderColor: "orange",
                                                                           borderRadius: 12,
                                                                           display: "flex",
                                                                           justifyContent: 'center',
                                                                           alignItems: 'center'}}>
                                                                  <Link to="signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                                                                           aria-controls="pills-home" aria-selected="true" style={{color: "orange"}}>
                                                                      Log in
                                                                  </Link>
                                           </div>}
                        {isNotLoggedIn &&  <div style={{height: 56,
                                                                               width: 120,
                                                                               backgroundColor: "#ffe95a",
                                                                               color: "orange",
                                                                               marginLeft: 4,
                                                                               borderColor: "orange",
                                                                               borderRadius: 12,
                                                                               display: "flex",
                                                                               justifyContent: 'center',
                                                                               alignItems: 'center'}}>
                                                                      <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                                                                               aria-controls="pills-home" aria-selected="true" style={{color: "orange"}}>
                                                                          Sign up
                                                                      </Link>
                                            </div>}
                        {user && !isNotLoggedIn && <div style={{color: "#770000", width: 150}}
                                                        >Logged in as: {user.name}</div>}

                        {user && !isNotLoggedIn && <button style={{height: 56,
                                                                   width: 140,
                                                                   backgroundColor: "#ffe95a",
                                                                   color: "orange",
                                                                   marginLeft: 4,
                                                                   borderColor: "orange",
                                                                   borderStyle: "none",
                                                                   borderRadius: 12,
                                                                   display: "flex",
                                                                   justifyContent: 'center',
                                                                   alignItems: 'center'}}
                                                           onClick={() => localStorage.removeItem('token')}>
                                                                Log out
                                                    </button>}
                        {user && !isNotLoggedIn && <div style={{height: 56,
                                                                 width: 140,
                                                                 backgroundColor: "#ffe95a",
                                                                 color: "orange",
                                                                 marginLeft: 4,
                                                                 borderColor: "orange",
                                                                 borderRadius: 12,
                                                                 display: "flex",
                                                                 justifyContent: 'center',
                                                                 alignItems: 'center'}}>
                                                         <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                           aria-controls="pills-home" aria-selected="true" style={{color: "orange"}}>
                                                                Add movie
                                                         </Link>
                                                    </div>}

                    </div>
                </div>
    );
};

export default Navbar;