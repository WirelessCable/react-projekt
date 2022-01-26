import React, { Component } from 'react';
import Image from '../resources/banner.jpg';
import MovieRating from './movieRating';
import { Link } from "react-router-dom";

const ItemCard = ( props ) => {

    const { items } = props;

        return (<div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                    {items.map((item) => (

        <div class="card" style={{display: "flex",
                                            width: "30%",
                                            height: "auto",
                                            zIndex: 1,
                                            borderColor: "orange",
                                            borderStyle: "ridge",
                                            borderWidth: 1,
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            borderRadius: 12,
                                            padding: 6,
                                            float: "left"
                                        }}>

                    <div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <img src={item.image} style={{width: "45%", borderRadius: 6, marginBottom: 4}}/>
                        <MovieRating />
                    </div>
                    <h5 class="card-title" style={{color: "#ffe95a"}}>{item.title}</h5>
                    <p class="card-text" style={{color: "#ffe95a"}}>{item.content}</p>
                    <Link className="btn btn-primary btn-lg" to={"/details/" + item.id} role="button" style={{color: "#fffb8c",
                                                                                          backgroundColor: "orange",
                                                                                          borderColor: "orange"}}>
                        Read more...
                    </Link>
                    </div>
        </div>
                    ))}
        </div>)
    }

export default ItemCard;
